import React from "react";
import Link from "next/link";
import { useTheme } from "styled-components";
import Search from "../Icons/Search";
import Write from "../Icons/Write";
import HomeIcon from "../Icons/Home";
export default function Nav() {
  const theme = useTheme();

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link href={"/Home"}>
            <a>
              <HomeIcon color={theme.logo} />
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
          border-radius: 50px;
        }
        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 60px;
          justify-content: center;
          border-radius: 40px;
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
