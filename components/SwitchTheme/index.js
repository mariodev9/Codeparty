import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeStore";
import Ligth from "../Icons/Ligth";
import Dark from "../Icons/Dark";

const SwitchTheme = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <div onClick={() => switchTheme("light")}>
          <Dark />
        </div>
      ) : (
        <div onClick={() => switchTheme("dark")}>
          <Ligth />
        </div>
      )}
      <style jsx>
        {`
          div:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default SwitchTheme;
