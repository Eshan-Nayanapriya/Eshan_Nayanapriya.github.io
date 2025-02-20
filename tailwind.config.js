/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      //colors used in the project
      colors: {
        primary: "#00ace6",
        secondary: "#0066ff",
        background: "#e6f9ff",
        white: "#FBFBFB",
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #00bfff, #000080)',
      }
    },
  },
  plugins: [],
}
