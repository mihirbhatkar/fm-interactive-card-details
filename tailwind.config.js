/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-mobile": "url('/images/bg-main-mobile.png')",
        "img-desktop": "url('/images/bg-main-desktop.png')",
        "img-card-front": "url('/images/bg-card-front.png')",
        "img-card-back": "url('/images/bg-card-back.png')",
      },

      colors: {
        "prim-grad-from": "hsl(249, 99%, 64%)",
        "prim-grad-to": "hsl(278, 94%, 30%)",
        "prim-red-alert": "hsl(0, 100%, 66%)",

        "neu-white": "hsl(0, 0%, 100%)",
        "neu-light-gray-violet": "hsl(270, 3%, 87%)",
        "neu-dark-gray-violet": "hsl(279, 6%, 55%)",
        "neu-very-dark-violet": "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
};
