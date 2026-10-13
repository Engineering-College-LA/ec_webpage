/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src-v2/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // v3 — Alpine redesign tokens (src-v2 only). Prefixed to avoid
        // colliding with the live-site tokens below (e.g. "slate" is a
        // builtin Tailwind palette — "v2-slate" can't shadow it).
        "v2-paper": "var(--v2-color-paper)",
        "v2-ink": "var(--v2-color-ink)",
        "v2-pencil": "var(--v2-color-pencil)",
        "v2-line": "var(--v2-color-line)",
        "v2-cobalt": "var(--v2-color-cobalt)",
        "v2-cobalt-wash": "var(--v2-color-cobalt-wash)",
        "v2-tape": "var(--v2-color-tape)",
        "v2-mist": "var(--v2-color-mist)",
        "v2-slate": "var(--v2-color-slate)",
        "v2-hairline": "var(--v2-color-hairline)",
        "v2-navy": "var(--v2-color-navy)",
        "v2-navy-2": "var(--v2-color-navy-2)",
        "v2-crimson": "var(--v2-color-crimson)",
        "v2-sky": "var(--v2-color-sky)",
        "v2-ink-deep": "var(--v2-color-ink-deep)",
        "v2-step-2": "var(--v2-color-step-2)",
        "v2-step-3": "var(--v2-color-step-3)",
        "v2-step-4": "var(--v2-color-step-4)",
        "v2-dusk": "var(--v2-color-dusk)",
        "v2-ink-nav": "var(--v2-color-ink-nav)",
        "v2-blush": "var(--v2-color-blush)",
        "v2-footer-muted": "var(--v2-color-footer-muted)",
        "v2-footer-link": "var(--v2-color-footer-link)",

        "n-gray": "#62656F",
        "n-bluish": "#A0BAD7",
        "n-bluish-90": "#aac1db",
        "n-bluish-80": "#b3c8df",
        "n-bluish-70": "#bdcfe3",
        "n-bluish-60": "#c6d6e7",
        "n-bluish-50": "#d9e3ef",
        "n-blue": "#2259A4",
        "n-blue-hard": "#1C3C71",
        "n-blue-light": "#e9eef6",
        main: "#F6C90E",
        "main-100": "#ddb50d",
        "main-gray": "#F5F7F8",
        "main-second": "#495E57",
        "main-third": "#45474B",
        "dark-brown": "rgba(53,52,49,1)",
        yell: "#f6e05e",
      },
      backgroundImage: {
        "hero-gradient":
          'linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.45)), url("./assets/img_1.jpg")',
        "h-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0) 65%, #F6C90E 65%)",
        mission: "url('./assets/img_04.jpg')",
        application: "url('./assets/img_11.jpg')",
        quote: "url('./assets/person_01.jpg')",
      },
      backgroundSize: {
        "full-40": "100% 40%",
      },
      backgroundPosition: {
        "bottom-10": "0 90%",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
        ring: {
          "0%, 35%": { transform: "rotate(0)" },
          "10%, 20%, 30%": { transform: "rotate(-15deg)" },
          "15%, 25%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        ring: "ring 3s ease-out infinite",
        "pulse-shadow": "pulse-shadow 2s infinite",
        pulseRing: "pulseRing 1.5s cubic-bezier(0.7, 0, 0.3, 1) infinite",
        shimmer: "shimmer 3.5s linear infinite",
      },
      boxShadow: {
        custom: "rgba(7, 65, 210, 0.1) 0px 9px 30px",
        custom2: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      },

      // v3 — Alpine redesign tokens (src-v2 only), see colors comment above.
      fontFamily: {
        "v2-display": "var(--v2-font-display)",
        "v2-heading": "var(--v2-font-heading)",
        "v2-body": "var(--v2-font-body)",
        "v2-mono": "var(--v2-font-mono)",
        "v2-accent-display": "var(--v2-font-accent-display)",
        "v2-accent-script": "var(--v2-font-accent-script)",
        "v2-accent-alt": "var(--v2-font-accent-alt)",
      },
      fontSize: {
        "v2-label": "var(--v2-text-label)",
        "v2-body": "var(--v2-text-body)",
        "v2-h3": "var(--v2-text-h3)",
        "v2-h2": "var(--v2-text-h2)",
        "v2-display": "var(--v2-text-display)",
      },
      spacing: {
        "v2-gutter": "var(--v2-spacing-gutter)",
      },
      borderRadius: {
        "v2-sm": "var(--v2-radius-sm)",
        "v2-pill": "var(--v2-radius-pill)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".shimmer-gradient": {
            backgroundImage:
              "linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.65) 50%, transparent 75%, transparent 100%)",
          },
        },
        ["responsive", "hover"],
      );
    },
  ],
};
