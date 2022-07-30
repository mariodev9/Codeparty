import React from "react";

export default function Sidenav() {
  return (
    <>
      <div className="sidenav">
        <ol>
          <li>Inicio</li>
          <li>Guardados</li>
          <li>Perfil</li>
          <li>Codear</li>
          <li>Cerrar sesion</li>
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
        }

        li {
          list-style: none;
          font-size: 1.5rem;
          margin: 5px 0px;
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
