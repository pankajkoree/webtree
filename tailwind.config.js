/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the 'src' directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include all files in the 'components' directory
  ],
  theme: {
    extend: {
      // Customizations for your theme (colors, fonts, etc.) can go here
    },
  },
  plugins: [],
};
