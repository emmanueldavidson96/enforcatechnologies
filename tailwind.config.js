/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed: 'rgb(254, 72, 72)',
        customPink: 'rgb(255,224,224)',
        customBlue: 'rgb(156,179,215)',
        customDeepBlue: 'rgb(65,83,178)',
      },
      width: {
        customW: '70%',
      },
    },
  },
  daisyui:{
    themes: [],
  },
  plugins: [
    require("daisyui"),
  ],
};
