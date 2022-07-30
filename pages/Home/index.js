import React, { useState, useEffect } from "react";
import { logOut, listenLatestCodes } from "../../firebase/client";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import Code from "../../components/Code";
import styled from "styled-components";
import { Avatar } from "../../components/Avatar";
import { useTheme } from "styled-components";
import CodeParty from "../../components/Icons/Codeparty";
import SwitchTheme from "../../components/SwitchTheme";
import Head from "next/head";
import Nav from "../../components/Nav";
import Sidenav from "../../components/Sidenav";

// background-color: ${(props) => props.theme.background};

export default function Home() {
  const [timeline, setTimeline] = useState([]);
  const [session, onSession] = useState(true);
  const theme = useTheme();
  const user = useUser();
  const router = useRouter();

  const handleOut = () => {
    logOut();
    onSession(false);
  };

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  useEffect(() => {
    if (user) {
      listenLatestCodes(setTimeline);
    }
  }, [user]);

  return (
    <>
      <div className="container">
        <Head>
          <title>Inicio / Codeparty</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <header>
          <div className="avatar-profile">
            {user && (
              <Avatar src={user?.avatar} alt={user?.name} width="34px" />
            )}
          </div>
          <CodeParty height={50} width={60} color={theme.logo} />
          <Button onClick={handleOut}>Log Out</Button>
          <SwitchTheme />
        </header>

        <div className="main">
          <Sidenav />
          <section>
            {timeline.map(
              ({ id, userName, avatar, content, createdAt, userId, img }) => (
                <Code
                  avatar={avatar}
                  id={id}
                  key={id}
                  content={content}
                  userName={userName}
                  img={img}
                  createdAt={createdAt}
                  userId={userId}
                />
              )
            )}
          </section>
        </div>
        {timeline.length != 0 && <Nav />}
      </div>
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

        .container {
          display: flex;
          flex-direction: column;
          position: sticky;
        }

        .main {
          display: flex;
          flex-direction: row;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
        }

        section {
          padding-top: 40px;
          flex: 1;
        }

        @media screen and (max-width: 642px) {
          .sidenav {
            display: none;
          }
        }

        @media screen and (min-width: 642px) {
          section {
            border-left: solid 1px #828da9;
          }
        }
      `}</style>
    </>
  );
}
