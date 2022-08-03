import React from "react";
import Follow from "../../Follow";
import News from "../../News";

export default function RightSidenav() {
  return (
    <>
      <div className="sidenav">
        <div className="info-container">
          <News />
          <Follow />
        </div>
      </div>
      <style jsx>{`
        .sidenav {
          min-width: 31%;

          /* top: 10px; */

          display: flex;
          flex-direction: column;
        }

        .info-container {
          position: fixed;
          width: 30%;
          padding: 30px 15px;
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
