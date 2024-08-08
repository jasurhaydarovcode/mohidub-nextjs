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
        "blua": {
          "100": "#3182ED",
          "800": "#162032"
        },
        "neutral": {
          "100": "#E9E9F4",
          "200": "#D6D6E0",
          "300": "#C2C2CC",
          "400": "#A9A9B8",
          "500": "#9191A1",
          "600": "#797988",
          "700": "#606070",
          "800": "#484858",
          "900": "#303038",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
