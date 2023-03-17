/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // https://draculatheme.com/contribute
            colors: {
                "dra-curent-line": "#44475a",
                "dra-background": "#282a36",
                "dra-foreground": "#f8f8f2",
                "dra-comment": "#6272a4",
                "dra-orange": "#ffb86c",
                "dra-yellow": "#f1fa8c",
                "dra-purple": "#bd93f9",
                "dra-green": "#50fa7b",
                "dra-cyan": "#8be9fd",
                "dra-pink": "#ff79c6",
                "dra-red": "#ff5555",
            },
        },
    },
    plugins: [require("prettier-plugin-tailwindcss")],
};
