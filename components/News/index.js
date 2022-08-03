import React from "react";
import { useTheme } from "styled-components";

export default function News() {
  const theme = useTheme();

  return (
    <>
      <div className="news">
        <h3>Qué está pasando</h3>
        <div className="new">
          <header className="secondary-text">Proyecto - Proximamente</header>
          <p>ShirtStore: Tienda de las camisetas mas iconicas del futbol</p>
          <footer className="secondary-text">
            Actualmente en desarrollo por
            <a href="https://github.com/mariodev9/">mariodev9</a>
          </footer>
        </div>
        <div className="new">
          <header className="secondary-text">Proyecto - Proximamente</header>
          <p>CarWash: El mejor lavadero de autos de Tandil</p>
          <footer className="secondary-text">
            Actualmente en desarrollo por
            <a href="https://github.com/mariodev9/">mariodev9</a>
          </footer>
        </div>
        <div className="new">
          <header className="secondary-text">Contacto</header>
          <p>Luciano Mariotti</p>
          <footer className="secondary-text">Linkedin</footer>
        </div>
      </div>
      <style jsx>{`
        .news {
          background-color: ${theme.secondary};
          border-radius: 10px;
        }
        .new {
          list-style: none;
          font-size: 1rem;
          padding: 5px 15px;
        }

        h3 {
          margin-bottom: 15px;
          font-size: 1.3rem;
          padding: 16px;
          border-radius: 10px;
        }

        .new:hover {
          background: ${theme.tertiary};
          cursor: pointer;
        }

        .new:last-child {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        .secondary-text {
          font-weight: 100;
          font-size: 0.9rem;
          color: ${theme.grey};
          margin-bottom: 5px;
        }

        p {
          font-weight: 200;
        }

        a {
          margin-left: 4px;
          color: ${theme.logo};
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
