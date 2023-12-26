/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      "sky-blue": "#A9CBF0",
      "light-blue": "#7CB1E7",
      "main-blue": "#3579D8",
      "main-gray": "#F2F2F2",
      "dark-gray": "#DDDDDD",
      "text-gray": "#808080",
    },
    screens: {
      customMd: "800px",
    },
  },
  plugins: ["@tailwindcss/forms"],
};
