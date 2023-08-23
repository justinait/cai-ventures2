import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    pink: '#3349A1',
    accents: "lightBlue",
    darkTeal: "#3c7f8b"
  },
  fonts: ["Arial", "sans-serif"],
  fontSizes: {
    text: "1rem",
    subtitles: "2rem",
    titles: "3rem"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;