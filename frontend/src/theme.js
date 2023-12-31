import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  initialColorMode: "dark",
  colors: {
    brand: {
      backgroundOne: "#222831",
      backgroundTwo: "#393E46",
      primaryOne: "#EEEEEE",
      primaryTwo: "#00ADB5",
    },
  },
  styles: {
    global: {
      body: {
        color: "#FFFFFF",
      },
    },
  },
});

export default theme;
