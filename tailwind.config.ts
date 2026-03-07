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
        brand: {
          dark:    "#110602",   // near-black deep brown
          board:   "#3D1507",   // rich mahogany board
          brown:   "#6B2A0F",   // mid warm brown
          gold:    "#D4920A",   // amber gold (restaurant lights)
          "gold-light": "#F0B535",
          cream:   "#FDF3E3",   // warm off-white
          red:     "#C0392B",   // logo red script
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse at top, #3D1507 0%, #110602 70%)",
        "gold-gradient": "linear-gradient(135deg, #D4920A 0%, #F0B535 50%, #D4920A 100%)",
        "dark-gradient": "linear-gradient(180deg, #110602 0%, #1C0A04 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-in-left": "slideInLeft 0.7s ease forwards",
        "slide-in-right": "slideInRight 0.7s ease forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeInUp: {
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold: "0 0 20px rgba(212, 146, 10, 0.4)",
        "gold-lg": "0 0 40px rgba(212, 146, 10, 0.3)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
