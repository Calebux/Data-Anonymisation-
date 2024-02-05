/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        heroBg: 'url("/src/assets/heroBg.jpg")',
        bg2: 'url("/src/assets/bg2.jpg")',
      },
      colors: {
        primaryColor: "#0B0C23",
        dark60: "rgba(18,18,18, 0.6)",
        transparentBlue: "rgba(11, 12, 35, 0.6)",
      },
    },
  },
  plugins: [],
};
