import React from "react";
import HomeIcon from "../../Icons/Home";
import { useTheme } from "styled-components";
import User from "../../Icons/User";
import Save from "../../Icons/Save";
import Close from "../../Icons/Close";
import Link from "next/link";
import useUser from "../../../hooks/useUser";
import Menu from "../../Icons/Menu";
import { Avatar } from "../../Avatar";

export default function LeftSidenav() {
  const theme = useTheme();
  const user = useUser();

  return (
    <>
      <div className="sidenav">
        <div className="fix-container">
          <h3>Inicio</h3>
          <ol>
            <li>
              <Link href={"/Home"}>
                <a>
                  <HomeIcon color={theme.logo} width={30} height={30} />
                  <p>Inicio</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/Home"}>
                <a>
                  <User color={theme.logo} />
                  <p>Perfil</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/Home"}>
                <a>
                  <Save color={theme.logo} />
                  <p>Guardado</p>
                </a>
              </Link>
            </li>

            {/* <li>
              <Close color={theme.logo} />
              <p>Cerrar Sesion</p>
            </li> */}
          </ol>
          <div className="codear-button">
            <p>Codear</p>
          </div>

          <div className="options">
            <div className="asd">
              {user && <Avatar src={user?.avatar} width="35" />}
            </div>
            <p>{user?.name}</p>
            <Menu color={theme.logo} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .sidenav {
          width: 25%;
          padding: 24px 0px;
        }
        .fix-container {
          position: fixed;
          width: 25%;
          padding: 0px 10px;
        }

        h3 {
          padding: 10px;
          font-weight: 700;
          font-size: 1.7rem;
        }

        ol {
          padding-top: 20px;
        }
        li {
          list-style: none;
          font-size: 1.5rem;
          margin: 10px 0px;
          align-items: center;
          border-radius: 50px;
          height: 50px;
          width: auto;
          /* este padding afecta el ALINEAMIENTO  */
          padding: 10px;
        }
        li:hover {
          cursor: pointer;
          background-color: ${theme.secondary};
          transition: all 0.4s;
          border-radius: 10px;
          box-shadow: #001330 0px 4px;
        }
        a > :global(p) {
          margin-left: 15px;
        }
        li a {
          display: flex;
        }

        .codear-button {
          background-color: ${theme.logo};
          text-align: center;
          padding: 10px;
          border-radius: 50px;
          cursor: pointer;
          margin-top: 65px;
        }
        .codear-button:hover {
          background-color: ${theme.logo};
        }
        .codear-button p {
          font-size: 1.2rem;
          color: #fff;
        }

        .options {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.3rem;
          padding: 35px;
        }

        @media screen and (max-width: 642px) {
          .sidenav {
            display: none;
          }
        }

        @media screen and (max-width: 950px) {
          li {
            font-size: 1rem;
          }
          li > :global(svg) {
            width: 25px;
            height: 20px;
          }

          ol {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
}
