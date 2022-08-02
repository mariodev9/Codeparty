import React from "react";
import { useTheme } from "styled-components";

export default function RightSidenav() {
  const theme = useTheme();
  return (
    <>
      <div className="sidenav">
        <div className="news-container">
          <div className="follow">
            <h3>Que esta pasando</h3>
            <ol>
              <li>Midu</li>
              <li>Goncy</li>
              <li>Devrock</li>
            </ol>
          </div>
          <div className="another">
            <li>jeje</li>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sidenav {
          border-radius: 20px;
          min-width: 31%;
          height: 100vh;
          top: 20px;
          display: flex;
          flex-direction: column;
        }

        .news-container {
          position: fixed;
          width: 100%;
          padding: 30px 15px;
        }

        .follow {
          background-color: ${theme.secondary};
          width: 30%;
          border-radius: 10px;
        }
        li {
          list-style: none;
          font-size: 1.5rem;
          padding: 5px 15px;
        }

        h3 {
          margin-bottom: 15px;
          font-size: 1.3rem;
          padding: 16px;
          border-radius: 10px;
        }

        li:hover {
          background: ${theme.tertiary};
          cursor: pointer;
        }

        li:last-child {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        .another {
          bottom: 0;
        }

        @media screen and (max-width: 950px) {
          .sidenav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
