import React from "react";

export default function RightSidenav() {
  return (
    <>
      <div className="sidenav">
        <div className="follow">
          <h3>Que esta pasando</h3>
          <ol>
            <li>Midu</li>
            <li>Goncy</li>
            <li>Devrock</li>
          </ol>
        </div>
      </div>
      <style jsx>{`
        .sidenav {
          border-radius: 20px;
          min-width: 25%;
          height: 100vh;
          top: 20px;
        }

        .follow {
          position: fixed;
        }
        li {
          list-style: none;
          font-size: 1.5rem;
          margin: 5px 0px;
          position: sticky;
        }
        @media screen and (max-width: 900px) {
          .sidenav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
