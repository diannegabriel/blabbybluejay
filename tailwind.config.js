/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bat-flip": "url('/public/assets/8136731.png')",
      },
    },
  },
  plugins: [],
};
