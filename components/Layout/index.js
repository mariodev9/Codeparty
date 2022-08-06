import React from "react";
import Nav from "./Nav";
import HeaderNav from "./HeaderNav";
import LeftSidenav from "./LeftSidenav";
import RightSidenav from "./RightSidenav";

export default function Layout({ children }) {
  return (
    <>
      <div className="row">
        <LeftSidenav />
        <section>
          <HeaderNav />
          <div className="timeline">{children}</div>
        </section>
        <RightSidenav />
      </div>
      {/* {timeline.length != 0 && <Nav />} */}
      <Nav />
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        section {
          display: flex;
          flex-direction: column;
          width: 50%;
        }

        .timeline {
          padding-top: 40px;
        }

        @media screen and (min-width: 642px) {
          section {
            border-left: solid 1px #828da9;
            border-right: solid 1px #828da9;
          }
        }

        @media screen and (max-width: 950px) {
          section {
            width: 70%;
          }
        }

        @media screen and (max-width: 642px) {
          section {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
