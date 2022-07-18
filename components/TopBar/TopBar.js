import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeStore";

const TopBar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => switchTheme("light")}>Cambiar a dark</button>
      ) : (
        <button onClick={() => switchTheme("dark")}>Cambiar a ligth</button>
      )}
    </>
  );
};

export default TopBar;
