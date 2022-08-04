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
          <li className="options">
            <div className="avatar-container">
              {user && <Avatar src={user?.avatar} width="35" />}
            </div>
            <p>{user?.name}</p>
            <Menu color={theme.logo} />
          </li>
        </div>
      </div>
      <style jsx>{`
        .sidenav {
          min-width: 25%;
          top: 20px;
          padding-left: 30px;
        }
        .fix-container {
          padding-top: 15px;
          position: fixed;
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
          transition: all 0.3s;
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
          margin-left: 25px;
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
          display: flex;
          align-items: center;
          font-size: 1.3rem;
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
