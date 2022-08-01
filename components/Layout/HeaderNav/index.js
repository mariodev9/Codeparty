import React from "react";
import { Avatar } from "../../Avatar";
import SwitchTheme from "../../SwitchTheme";
import CodeParty from "../../Icons/Codeparty";
import Button from "../../Button";
import { useTheme } from "styled-components";
import useUser from "../../../hooks/useUser";

export default function HeaderNav() {
  const theme = useTheme();
  const user = useUser();

  return (
    <>
      <header>
        <div className="avatar-profile">
          {user && <Avatar src={user?.avatar} alt={user?.name} width="34px" />}
        </div>
        <CodeParty height={50} width={60} color={theme.logo} />
        {/* <Button onClick={handleOut}>Log Out</Button> */}
        <SwitchTheme />
      </header>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #828da9;
          height: 49px;
          display: flex;
          position: sticky;
          justify-content: space-between;
          top: 0;
          width: 100%;
          padding: 40px;
          background-color: ${theme.background};
        }
      `}</style>
    </>
  );
}
