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
          Hover: "#24292E",
          Active: "#24292E",
          Text: "#FFFFFF",
          Icons: {
            Home: "#00D8FF",
            Contact: "#42A5F5",
            Projects: "#FFCA28",
            Github: "#FFFFFF",
            About: "#E44D26"
          }
        },
        PageNavbar: {
          Bg: "#1F2428",
          Text: "#FFFFFF",
          HoverPageBg: "#24292E",
          ActivePageBg: "#24292E",
          ActivePageBorder: "#C4C4C4",
          Icons: {
            Home: "#00D8FF",
            Contact: "#42A5F5",
            Projects: "#FFCA28",
            Github: "#FFFFFF",
            About: "#E44D26"
          },
        }
      },
    },
  },
  plugins: [],
}
