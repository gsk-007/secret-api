import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  colors: {
    brand: {
      backgroundOne: "#222831",
      backgroundTwo: "#393E46",
      primaryTwo: "#00ADB5",
      primaryOne: "#EEEEEE",
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
