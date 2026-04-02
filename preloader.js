(function () {
  "use strict";

  var preloader = document.getElementById("page-preloader");
  if (!preloader) return;

  var reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pickVideo() {
    var mobile = window.matchMedia("(max-width: 1024px)").matches;
    return mobile
      ? preloader.querySelector(".page-preloader-video--mobile")
      : preloader.querySelector(".page-preloader-video--desktop");
  }

  function fadeOut() {
    preloader.setAttribute("aria-busy", "false");
    preloader.classList.add("page-preloader--exiting");
    document.body.classList.remove("preloader-active");
    document.documentElement.classList.remove("preloader-active");
    var remove = function () {
      preloader.setAttribute("aria-hidden", "true");
      preloader.style.display = "none";
      preloader.querySelectorAll("video").forEach(function (v) {
        v.pause();
        v.removeAttribute("src");
        v.load();
      });
      preloader.removeEventListener("transitionend", remove);
    };
    preloader.addEventListener("transitionend", remove);
    setTimeout(remove, 800);
  }

  function whenPageReady() {
    return new Promise(function (resolve) {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });
  }

  function exitAfterVideo() {
    Promise.all([whenPageReady(), new Promise(function (r) { setTimeout(r, 150); })]).then(fadeOut);
  }

  if (reduced) {
    fadeOut();
    return;
  }

  var video = pickVideo();
  if (!video) {
    fadeOut();
    return;
  }

  video.muted = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  video.addEventListener(
    "ended",
    function () {
      exitAfterVideo();
    },
    { once: true }
  );

  video.addEventListener(
    "error",
    function () {
      fadeOut();
    },
    { once: true }
  );

  var p = video.play();
  if (p && typeof p.catch === "function") {
    p.catch(function () {
      fadeOut();
    });
  }

  var safetyMs = 45000;
  setTimeout(function () {
    if (!preloader.classList.contains("page-preloader--exiting")) {
      fadeOut();
    }
  }, safetyMs);
})();
