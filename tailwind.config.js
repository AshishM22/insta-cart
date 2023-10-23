/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      backgroundColor: {
        "custom-blue": "#1f2937",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
}
