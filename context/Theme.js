import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./ThemeStore";

const themes = {
  dark: {
    background: "#100F0F",
    BlurBackground: "#0a0a0a8a",
    title: "#6495ed",
    text: "#FEFEFE",
    logo: "#34B3F1",
    nav: "#100f0f",
    secondary: "#191C25",
    tertiary: "#212530",
    border: "#303646",
    grey: "#828DA9",
  },
  light: {
    background: "#fff",
    BlurBackground: "rgba(255, 255, 255, 0.25)",
    title: "#ff6347",
    text: "#000",
    logo: "#34B3F1",
    nav: "#fff",
    secondary: "#def4ff",
    tertiary: "#aee2ff",
    border: "#c4c9d6",
    grey: "#828DA9",
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
