module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["Poppins"],
    },

    extend: {
      colors: {
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },

  plugins: [],
};
