/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'background-1' : "url('https://drive.google.com/uc?export=view&id=1w-qsKR2WR02rC7VEKTRdZzPyeh9Orh74')"
      },
      height: {
        '500': '500px', // Custom height value
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
};
