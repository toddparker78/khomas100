/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui"],
        body: ["ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
};
