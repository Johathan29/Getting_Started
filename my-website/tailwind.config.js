module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'], // Compatible con Docusaurus
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
