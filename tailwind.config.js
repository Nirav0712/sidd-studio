/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Texta', 'sans-serif'],
                display: ['Texta', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#000000',
                    light: '#222222',
                },
                accent: {
                    DEFAULT: '#000000',
                    hover: '#333333',
                }
            }
        },
    },
    plugins: [],
}
