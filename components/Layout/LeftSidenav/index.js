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
            <HomeIcon color={theme.logo} />
            Inicio
          </li>
          <li>
            <Save color={theme.logo} />
            Guardados
          </li>
          <li>
            <User color={theme.logo} />
            Perfil
          </li>
          <li>Codear</li>
          <li>
            <Close color={theme.logo} />
            Cerrar sesion
          </li>
        </ol>
      </div>
      <style jsx>{`
        .sidenav {
          border-radius: 20px;
          min-width: 25%;
          height: 100vh;
          top: 20px;
        }

        ol {
          position: fixed;
          padding-top: 20px;
          padding-left: 25px;
        }

        li {
          list-style: none;
          font-size: 1.5rem;
          margin: 10px 0px;
        }
        @media screen and (max-width: 642px) {
          .sidenav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
