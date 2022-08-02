import React from "react";
import Link from "next/link";
import { useTheme } from "styled-components";
import Search from "../../Icons/Search";
import Write from "../../Icons/Write";
import HomeIcon from "../../Icons/Home";
export default function Nav() {
  const theme = useTheme();

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link href={"/Home"}>
            <a>
              <HomeIcon color={theme.logo} width={21} height={21} />
            </a>
          </Link>
          <Link href={"/Home"}>
            <a>
              <Search color={theme.logo} />
            </a>
          </Link>
          <Link href={"/Compose/Codeparty"}>
            <a>
              <Write color={theme.logo} />
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          bottom: 0;
          display: flex;
          position: sticky;
          width: 100%;
        }

        .nav-container {
          display: flex;
          width: 100%;
          background-color: ${theme.nav};
          border-top-right-radius: 30px;
          border-top-left-radius: 30px;
          border-top: solid #212c3a 1px;
        }
        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 50px;
          justify-content: center;
          border-radius: 40px;
        }
        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }

        @media screen and (min-width: 642px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
