import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f4a9bb",
          400: "#ec7593",
          500: "#e04d72",
          600: "#cc2d57",
          700: "#ac2048",
          800: "#8f1d41",
          900: "#7a1b3c",
          950: "#440a1d",
        },
        rioja: {
          burgundy: "#6B1A2A",
          darkburgundy: "#4A0F1C",
          deepred: "#8B2035",
          gold: "#C4952A",
          lightgold: "#D4A843",
          cream: "#F5EDD6",
          lightcream: "#FAF6ED",
          earth: "#3D2B1F",
          darkearth: "#1A0F08",
          stone: "#8C7B6B",
          fog: "#E8DDD0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wine-texture":
          "linear-gradient(135deg, #4A0F1C 0%, #6B1A2A 50%, #3D2B1F 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, transparent, rgba(196,149,42,0.3), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-in-left": "slideInLeft 0.8s ease forwards",
        "slide-in-right": "slideInRight 0.8s ease forwards",
        "scale-in": "scaleIn 0.6s ease forwards",
        shimmer: "shimmer 2.5s infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1) translateX(0) translateY(0)" },
          "100%": { transform: "scale(1.08) translateX(-2%) translateY(-1%)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "circ-out": "cubic-bezier(0, 0.55, 0.45, 1)",
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};

export default config;
