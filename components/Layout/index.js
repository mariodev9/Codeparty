import React from "react";
import Nav from "./Nav";
import HeaderNav from "./HeaderNav";
import LeftSidenav from "./LeftSidenav";
import RightSidenav from "./RightSidenav";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <HeaderNav />
        <div className="main">
          <LeftSidenav />
          <section>{children}</section>
          <RightSidenav />
        </div>
        {/* {timeline.length != 0 && <Nav />} */}
        <Nav />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: row;
        }
        section {
          padding-top: 40px;
          flex: 1;
        }

        @media screen and (min-width: 642px) {
          section {
            border-left: solid 1px #828da9;
            border-right: solid 1px #828da9;
          }
        }
      `}</style>
    </>
  );
}
