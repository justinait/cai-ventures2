import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: '#3349A1',
    lightBlue: "#CD373B",
    darkBlue: "#090D22"
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