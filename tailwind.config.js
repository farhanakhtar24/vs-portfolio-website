module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NavbarBg: "#1F2428",
        NavbarHover: "#3A4249",
        NavbarFont: "#C4C4C4",
        Sidebar: {
          Bg: "#24292E",
          IconHover: "#C4C4C4",
          IconActive: "#C4C4C4",
          IconInactive: "#5B595C",
        },
        FileIndexer: {
          Bg: "#1F2428",
          HeadingTextColour: "#C4C4C4",
          HTMLcolor: "#E44D26",
        }
      },
    },
  },
  plugins: [],
}
