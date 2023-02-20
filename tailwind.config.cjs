/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // https://draculatheme.com/contribute
            colors: {
                'dra-background': '#282a36',
                'dra-curent-line': '#44475a',
                'dra-foreground': '#f8f8f2',
                'dra-comment': '#6272a4',
                'dra-cyan': '#8be9fd',
                'dra-green': '#50fa7b',
                'dra-orange': '#ffb86c',
                'dra-pink': '#ff79c6',
                'dra-purple': '#bd93f9',
                'dra-red': '#ff5555',
                'dra-yellow': '#f1fa8c',
            },
        },
    },
    plugins: [require('prettier-plugin-tailwindcss')],
}