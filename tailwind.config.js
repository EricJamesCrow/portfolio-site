const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        'gray-200': '#F6F7F8'
      },
      boxShadow: {
        'custom': '0px 0px 2px 0px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'custom-color': '#161616',
        'custom-gray': '#F6F7F8',
        'tools-color': '#1A1A1A',
        'gradient-custom': 'linear-gradient(97.13deg, #E9E9E9 0%, #515151 100%)',
      },
      fontSize: {
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("tailwindcss-animate")
  ],
};
