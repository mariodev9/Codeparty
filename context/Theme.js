import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./ThemeStore";

const themes = {
  dark: {
    background: "#100F0F",
    title: "#6495ed",
    text: "#FEFEFE",
    logo: "#fff",
  },
  light: {
    background: "#fff",
    title: "#ff6347",
    text: "#000",
    logo: "#082032",
  },
};

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.background};

}
    * {
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme.text};
    }
  `;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
