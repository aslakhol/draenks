module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss/plugin"), require("@tailwindcss/forms")],
};
