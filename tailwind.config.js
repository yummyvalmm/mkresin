/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Instrument Sans"', 'sans-serif'],
            },
            colors: {
                // Chema Inspired Palette
                white: '#FFFFFF',
                black: '#000000',
                surface: '#F5F5F7',
                border: '#E5E5E5',

                // Brand Colors
                primary: '#2763AB', // Steel Blue from Chema
                primaryDark: '#1E4C85',
                primaryLight: '#EAF2FA', // Light blue background

                // Text Colors
                'text-main': '#111111',
                'text-muted': '#666666',
            },
            backgroundImage: {
                'hero-glow': 'radial-gradient(circle at center, rgba(39, 99, 171, 0.15) 0%, rgba(0,0,0,0) 70%)',
            }
        },
    },
    plugins: [],
}
