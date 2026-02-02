/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
          'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./assets/img_1.jpg")',
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
