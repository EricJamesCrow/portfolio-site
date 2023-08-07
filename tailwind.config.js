// tailwind.config.js
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
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
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
