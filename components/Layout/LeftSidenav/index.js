import React from "react";
import HomeIcon from "../../Icons/Home";
import { useTheme } from "styled-components";
import User from "../../Icons/User";
import Save from "../../Icons/Save";
import Close from "../../Icons/Close";

export default function LeftSidenav() {
  const theme = useTheme();

  return (
    <>
      <div className="sidenav">
        <ol>
          <li>
            <HomeIcon color={theme.logo} width={30} height={30} />
            <p>Inicio</p>
          </li>
          <li>
            <Save color={theme.logo} />
            <p>Guardado</p>
          </li>
          <li>
            <User color={theme.logo} />
            <p>Perfil</p>
          </li>
          <li>
            <Close color={theme.logo} />
            <p>Cerrar Sesion</p>
          </li>
        </ol>
      </div>
      <style jsx>{`
        .sidenav {
          min-width: 25%;
          height: 100vh;
          top: 20px;
        }

        ol {
          position: fixed;
          padding-top: 20px;
          margin-left: 15px;
        }

        li {
          list-style: none;
          font-size: 1.5rem;
          margin: 10px 0px;
          display: flex;
          align-items: center;
          border-radius: 50px;
          height: 50px;
          padding: 10px;
          width: auto;
        }

        li:hover {
          cursor: pointer;
          background-color: ${theme.secondary};
        }

        li > :global(p) {
          margin-left: 15px;
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
