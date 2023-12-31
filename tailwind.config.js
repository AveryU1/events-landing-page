/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "border-gradient":
                    "linear-gradient(180deg, #6223A1 0%, #A141CE 47.40%, #FF1C60 100%)",
                hero: "url('/assets/crowd.svg')",
            },
            colors: {
                "color-card": "#191F2E",
            },
        },
        fontFamily: {
            bebas_neue: ["var(--font-bebas-neue)"],
            inter: ["var(--font-inter)"],
        },
        screens: {
            xxs: { min: "280px" },
            xs: { min: "375px" },
            ...defaultTheme.screens,
            sm: { min: "640px" },
            md: { min: "768px" },
            lg: { min: "1024px" },
            xl: { min: "1280px" },
            "2xl": { min: "1536px" },
        },
    },
    plugins: [],
};
