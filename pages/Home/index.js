import React, { useState, useEffect } from "react";
import { logOut, fetchLatestCodes } from "../../firebase/client";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import Code from "../../components/Code";
import styled from "styled-components";
import { Avatar } from "../../components/Avatar";
import { useTheme } from "styled-components";
import HomeIcon from "../../components/Icons/Home";
import CodeParty from "../../components/Icons/Codeparty";
import Write from "../../components/Icons/Write";
import Search from "../../components/Icons/Search";
import TopBar from "../../components/TopBar/TopBar";
import Link from "next/link";
import Head from "next/head";
import { listenLatestCodes } from "../../firebase/client";

const Container = styled.div`
  bottom: 0;
  display: flex;
  height: 49px;
  position: sticky;
  width: 100%;
  flex-direction: column;
`;

// background-color: ${(props) => props.theme.background};

// background-color: ${(props) => props.theme.background};
const Nav = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  height: 49px;
`;

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

  // ver con useTheme hook
  // background-color: ${(props) => props.theme.background};

  return (
    <>
      <Container>
        <Head>
          <title>Inicio / Codeparty</title>
        </Head>
        <header>
          <div className="avatar-profile">
            {user && (
              <Avatar src={user?.avatar} alt={user?.name} width="34px" />
            )}
          </div>
          <CodeParty height={50} width={60} color={theme.logo} />
          {/* <Button onClick={handleOut}>Log Out</Button> */}
          <TopBar />
        </header>

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
        {timeline.length != 0 && (
          <Nav>
            <nav>
              <Link href={"/Home"}>
                <a>
                  <HomeIcon color={theme.logo} />
                </a>
              </Link>
              <Link href={"/Home"}>
                <a>
                  <Search color={theme.logo} />
                </a>
              </Link>
              <Link href={"/Compose/Codeparty"}>
                <a>
                  <Write color={theme.logo} />
                </a>
              </Link>
            </nav>
          </Nav>
        )}
      </Container>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #40495d;
          height: 49px;
          display: flex;
          position: sticky;
          justify-content: space-between;
          top: 0;
          width: 100%;
          padding: 40px;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
        }
        section {
          padding-top: 40px;
          flex: 1;
        }
        nav {
          bottom: 0;
          border-top: 1px solid #c4c9d6;
          display: flex;
          height: 49px;
          width: 100%;
        }

        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 100%;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
