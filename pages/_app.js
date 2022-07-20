import "../styles/globals.css";
import styled from "styled-components";
import { ThemeStore } from "../context/ThemeStore";
import Theme from "../context/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeStore>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeStore>
    </>
  );
}

export default MyApp;
