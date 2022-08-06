import React from "react";
import { Avatar } from "../../Avatar";
import SwitchTheme from "../../SwitchTheme";
import CodeParty from "../../Icons/Codeparty";
import Button from "../../Button";
import { useTheme } from "styled-components";
import useUser from "../../../hooks/useUser";
import { logOut } from "../../../firebase/client";
export default function HeaderNav() {
  const theme = useTheme();
  const user = useUser();

  const handleOut = () => {
    logOut();
  };

  return (
    <>
      <header>
        <div className="avatar-profile">
          {user && <Avatar src={user?.avatar} alt={user?.name} width="34px" />}
        </div>
        <CodeParty height={50} width={60} color={theme.logo} />
        <Button onClick={handleOut}>Log Out</Button>
        <SwitchTheme />
      </header>
      <style jsx>{`
        header {
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          align-items: center;
          height: 49px;
          display: flex;
          position: sticky;
          justify-content: space-between;
          top: 0;
          width: 100%;
          padding: 40px;
          background-color: ${theme.background};
        }

        @media screen and (min-width: 642px) {
          header {
            background-color: ${theme.BlurBackground};
          }
          .avatar-profile {
            display: none;
          }
        }

        @media screen and (max-width: 642px) {
        }
      `}</style>
    </>
  );
}
