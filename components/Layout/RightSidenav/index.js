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
          display: flex;
          flex-direction: column;
          padding-top: 50px;
        }

        .info-container {
          position: fixed;
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
