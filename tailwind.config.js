/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                SansPro: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "custom-white": "#EFF8FF",
                "custom-black": "#141416",
                "custom-purple": "#9C27B0",
            },
            maxWidth: {
                container: "1440px",
            },
            keyframes: {
                gelatine: {
                    "0%": { transform: "scale(1, 1)" },
                    "25%": { transform: "scale(1.3, 0.7)" },
                    "50%": { transform: "scale(0.7, 1.3)" },
                    "75%": { transform: "scale(1.15, 0.85)" },
                },
            },
            animation: {
                gelatine: "gelatine 0.7s ease-in-out",
            },
        },
    },
    plugins: [],
};
