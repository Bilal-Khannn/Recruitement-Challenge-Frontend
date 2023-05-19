/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greylevel1: "#131417",
        greylevel2: "#18191D",
        greylevel3: "#282A31",
        unselectedstate: "#666666",
        greylevel4: "#808287",
        success: "#0AC18E",
      },
    },
  },
  plugins: [],
};
