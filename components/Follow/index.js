import React from "react";
import { useTheme } from "styled-components";
import { Avatar } from "../Avatar";
import useUser from "../../hooks/useUser";

export default function Follow() {
  const theme = useTheme();
  const user = useUser();

  return (
    <>
      <div className="follow">
        <h3>A quien seguir</h3>
        <div className="user">
          <div className="user-name">
            {user && <Avatar src={user?.avatar} alt={user?.name} width="40x" />}
            <p>Fernando Torres</p>
          </div>
          <div className="follow-button">Ver Perfil</div>
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

        .user-name {
          display: flex;
          align-items: center;
        }

        .user-name p {
          margin-left: 10px;
        }

        .follow-button {
          background-color: ${theme.logo};
          color: ${theme.text};
          text-align: center;
          padding: 0px 15px;
          border-radius: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          height: 40px;
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
