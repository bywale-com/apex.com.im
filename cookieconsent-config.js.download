import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom left",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar",
            position: "right",
            equalWeightButtons: false,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        /*functionality: {
          enabled: true
        },*/
        analytics: {
          enabled: false
        },
        marketing: {
          enabled: false
        }
    },

    language: {
        default: "en",
        autoDetect: "document",
        translations: {
            en: {
                consentModal: {
                    title: "Cookie preferences",
                    description: "We use cookies to enhance your browsing experience. By accepting all cookies, you agree to their use. For more details, review our Privacy Policy.<br><button class='show-only-us' style='display:none;' type='button' data-cc='accept-necessary'>Do not sell or share my personal information</button>",
                    acceptAllBtn: "Accept all",
                    /*acceptNecessaryBtn: "Reject all",*/
                    showPreferencesBtn: "More"
                },
                preferencesModal: {
                    title: "Cookie preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "To enhance your experience on our website, we use cookies. These cookies are necessary for the proper functioning of the site and help us analyze how you use our platform, allowing us to improve and personalize your browsing experience."
                        },
                        {
                            title: "Strictly necessary <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Strictly necessary cookies are essential for the functionality of a website, enabling basic features like page navigation and access to secure areas.",
                            linkedCategory: "necessary"
                        },
                        /*{
                            title: "Functional",
                            description: "These cookies enhance website functions by remembering preferences (like language or region) and enabling additional features.",
                            linkedCategory: "functionality"
                        },*/
                        {
                            title: "Analytics",
                            description: "Analytics cookies helps us improve the site's content and user experience by collecting data on the website usage, like visitor numbers and popular pages.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Marketing",
                            description: "Marketing cookies track browsing habits to show more relevant ads based on individual interests.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More information",
                            description: "For more details about the usage of cookies on our website please review our <a class=\"cc__link\" href=\"/privacy-policy\">privacy policy</a>."
                        }
                    ]
                }
            },
            de: {
                consentModal: {
                    title: "Cookie Einstellungen",
                    description: "Wir verwenden Cookies, um das Surferlebnis zu verbessern. Durch die Annahme aller Cookies stimmen Sie ihrer Verwendung zu. Für weitere Details lesen Sie unsere Datenschutzrichtlinie.<br><button class='show-only-us' style='display:none;' type='button' data-cc='accept-necessary'>Verkaufen oder teilen Sie meine persönlichen Daten nicht</button>",
                    acceptAllBtn: "Alle akzeptieren",
                    /*acceptNecessaryBtn: "Alle ablehnen",*/
                    showPreferencesBtn: "Mehr"
                },
                preferencesModal: {
                    title: "Cookie Nutzung",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Modal schließen",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Um Ihr Erlebnis auf unserer Website zu verbessern, verwenden wir Cookies. Diese Cookies sind für das reibungslose Funktionieren der Website notwendig und helfen uns dabei, zu analysieren, wie Sie unsere Plattform nutzen. Dies ermöglicht es uns, Ihr Browsing-Erlebnis zu verbessern und zu personalisieren."
                        },
                        {
                            title: "Unbedingt erforderlich <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Unbedingt erforderliche Cookies sind für die Funktionalität einer Website unerlässlich und ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche.",
                            linkedCategory: "necessary"
                        },
                        /*{
                            title: "Funktionalität",
                            description: "Diese Cookies verbessern die Funktionen der Website, indem sie sich Präferenzen (wie Sprache oder Region) merken und zusätzliche Funktionen ermöglichen.",
                            linkedCategory: "functionality"
                        },*/
                        {
                            title: "Analyse",
                            description: "Analyse-Cookies helfen uns, den Inhalt und die Benutzererfahrung der Website zu verbessern, indem sie Daten zur Website-Nutzung sammeln, wie z. B. Besucherzahlen und beliebte Seiten.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Marketing",
                            description: "Marketing-Cookies verfolgen die Surfgewohnheiten, um relevantere Anzeigen basierend auf individuellen Interessen anzuzeigen.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Weitere Informationen",
                            description: "Weitere Informationen zur Verwendung von Cookies auf unserer Website finden Sie in unserer <a class=\"cc__link\" href=\"/privacy-policy\">Datenschutzerklärung</a>."
                        }
                    ]
                }
            }
        }
    }
});
