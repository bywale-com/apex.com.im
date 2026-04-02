import * as THREE from "three";

const container = document.querySelector(".slide-ele--4");

if (!container) {
  console.error("Container element .slide-ele--4 not found.");
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        init();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(container);
}

function init() {
  const scene = new THREE.Scene();
  const isMobile = window.innerWidth <= 1024;

  const wrapper = container.querySelector('.circle-animation--wrapper');
  
  if (!wrapper) {
    console.error('circle-animation--wrapper not found');
    return;
  }

  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;

  const aspect = width / height;
  const viewSize = 3.2;

  const camera = new THREE.OrthographicCamera(
    -viewSize * aspect, 
    viewSize * aspect, 
    viewSize, 
    -viewSize, 
    0.1, 
    1000
  );
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(width, height);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  renderer.setPixelRatio(isSafari && isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));

  const canvas = renderer.domElement;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  
  wrapper.appendChild(canvas);

  const radius = 2;
  const segments = 200;
  let time = 0;
  let isActive = false;

  const circle1Center = { x: 0, y: radius / 2 };
  const circle2Center = { x: 0, y: -radius / 2 };

  const geometry1 = new THREE.BufferGeometry();
  const points1 = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle) * radius + circle1Center.x;
    const y = Math.sin(angle) * radius + circle1Center.y;
    points1.push(x, y, 0);
  }
  geometry1.setAttribute('position', new THREE.Float32BufferAttribute(points1, 3));
  
  const material1 = new THREE.LineBasicMaterial({ 
    color: 0xffffff,
    transparent: true,
    opacity: 0.8
  });
  
  const circle1 = new THREE.Line(geometry1, material1);
  scene.add(circle1);

  const geometry2 = new THREE.BufferGeometry();
  const points2 = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle) * radius + circle2Center.x;
    const y = Math.sin(angle) * radius + circle2Center.y;
    points2.push(x, y, 0);
  }
  geometry2.setAttribute('position', new THREE.Float32BufferAttribute(points2, 3));
  
  const material2 = new THREE.LineBasicMaterial({ 
    color: 0xffffff,
    transparent: true,
    opacity: 0.8
  });
  
  const circle2 = new THREE.Line(geometry2, material2);
  scene.add(circle2);

  const glowGeometry = new THREE.CircleGeometry(0.2, 32);
  const glowMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xffffff,
    transparent: true,
    opacity: 0.9
  });
  const glow = new THREE.Mesh(glowGeometry, glowMaterial);
  scene.add(glow);

  const trailLength = 15;
  const trails = [];
  for (let i = 0; i < trailLength; i++) {
    const trailGeometry = new THREE.CircleGeometry(0.2 - (i * 0.01), 32);
    const trailMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.8 * (1 - i / trailLength)
    });
    const trail = new THREE.Mesh(trailGeometry, trailMaterial);
    scene.add(trail);
    trails.push(trail);
  }

  const outerPath = [];
  
  const startAngle1 = -Math.PI / 6;
  const arcLength1 = 4 * Math.PI / 3;
  
  for (let i = 0; i <= 250; i++) {
    const t = i / 250;
    const angle = startAngle1 + t * arcLength1;
    const x = Math.cos(angle) * radius + circle1Center.x;
    const y = Math.sin(angle) * radius + circle1Center.y;
    
    outerPath.push({ x, y });
  }

  const startAngle2 = 5 * Math.PI / 6;
  const arcLength2 = 4 * Math.PI / 3;
  
  for (let i = 0; i <= 250; i++) {
    const t = i / 250;
    const angle = startAngle2 + t * arcLength2;
    const x = Math.cos(angle) * radius + circle2Center.x;
    const y = Math.sin(angle) * radius + circle2Center.y;
    
    outerPath.push({ x, y });
  }

  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isActive = entry.isIntersecting && entry.intersectionRatio >= 0.5;
    });
  }, { threshold: [0, 0.5, 1] });
  
  visibilityObserver.observe(container);

  const resizeObserver = new ResizeObserver(() => {
    const newWidth = wrapper.clientWidth;
    const newHeight = wrapper.clientHeight;
    const newAspect = newWidth / newHeight;
    
    camera.left = -viewSize * newAspect;
    camera.right = viewSize * newAspect;
    camera.top = viewSize;
    camera.bottom = -viewSize;
    camera.updateProjectionMatrix();
    
    renderer.setSize(newWidth, newHeight);
  });
  resizeObserver.observe(wrapper);

  const positionHistory = [];

  function animate() {
    if (isActive) {
      time += 0.0015;
      
      const index = Math.floor(time * outerPath.length) % outerPath.length;
      const pos = outerPath[index];
      glow.position.set(pos.x, pos.y, 0);
      
      positionHistory.unshift({ x: pos.x, y: pos.y });
      if (positionHistory.length > trailLength) {
        positionHistory.pop();
      }
      
      trails.forEach((trail, i) => {
        if (positionHistory[i]) {
          trail.position.set(positionHistory[i].x, positionHistory[i].y, -0.01);
        }
      });
    }
    
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}
