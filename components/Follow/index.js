import React from "react";
import { useTheme } from "styled-components";
import { Avatar } from "../Avatar";

export default function Follow() {
  const theme = useTheme();

  return (
    <>
      <div className="follow">
        <h3>A quien seguir</h3>
        <div className="user">
          <Avatar
            alt="https://espanol.eurosport.com/futbol/camisetas-con-historia-torres-el-hijo-prodigo-tras-el-erasmus-en-liverpool_sto7699131/story.shtml"
            src="asd"
            width="49px"
          />

          <p>Fernando Torres</p>
          <div>Seguir</div>
        </div>
      </div>
      <style jsx>{`
        .follow {
          background-color: ${theme.secondary};
          border-radius: 10px;
          margin-top: 15px;
        }
        .user {
          font-size: 1rem;
          padding: 5px 15px;
          display: flex;
          justify-content: space-between;
        }

        h3 {
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
