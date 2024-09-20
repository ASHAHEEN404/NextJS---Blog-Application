/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      rotate: "rotate 1.5s infinite linear",
    },

    keyframes: {
      rotate: {
        to: {
          transform: "rotate(1turn)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
