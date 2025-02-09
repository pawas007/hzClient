/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "rgba(43, 43, 69, 1)",
        white: "rgba(244, 243, 249, 1)",
        indigo: "rgba(130, 150, 255, 1)",

        "primary-900": "rgba(38, 38, 79, 1)",
        "primary-850": "rgba(44, 44, 91, 1)",
        "primary-700": "rgb(59, 60, 87,1)",
        "primary-800": "rgba(77, 77, 106, 1)",
        "primary-500": "rgba(164, 159, 185, 1)",
        "primary-100": "rgba(244, 243, 249, 1)",
        "primary-50": "rgba(208, 205, 221, 1)",
        "primary-light": "rgba(202, 202, 202, 1)",
        "primary-dark": "rgba(25, 25, 53, 1)",
        "primary-backdrop": "rgba(59, 59, 69, 1)",
        blue: "rgba(76, 120, 253, 1)",
        "blue-900": "rgb(57, 65, 216)",
        "dark-blue": "rgba(66, 103, 178, 1)",
        green: "rgba(76, 183, 56, 1)",
        gray: "rgba(212, 206, 235, 1)",
        red: "rgba(197,49,49,0.7)",
        "green-light": "rgba(109, 208, 90, 1)",
        dark: "rgb(196, 196, 196)",
        border: "#d0cddd",
      },
    },
  },
  plugins: [],
};
