// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // Add your light color scheme here
    brand: {
      50: "#f3f3f3",
      100: "#e0e0e0",
      200: "#c7c7c7",
      // Add more shades as needed
    },
    // Override other color modes if needed (optional)
  },
});

export default theme;
