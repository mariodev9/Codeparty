import React, { useState, useEffect } from "react";
import { logOut, listenLatestCodes } from "../../firebase/client";
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
          <TopBar />
        </header>
        <div className="main">
          <div className="sidenav">
            <ol>
              <li>Inicio</li>
              <li>Guardados</li>
              <li>Perfil</li>
              <li>Codear</li>
              <li>Cerrar sesion</li>
            </ol>
          </div>
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
        {timeline.length != 0 && (
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
        )}
      </Container>
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

        nav {
          bottom: 0;
          border-top: 1px solid #828da9;
          display: flex;
          position: sticky;
          width: 100%;
        }

        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 60px;
          justify-content: center;
        }

        .sidenav {
          border-radius: 20px;
          min-width: 25%;
          height: 100vh;
          position: sticky;
          top: 20px;
        }

        li {
          list-style: none;
          font-size: 1.5rem;
          margin: 5px 0px;
        }
        @media screen and (max-width: 642px) {
          section {
            border-left: solid 1px #828da9;
          }
          .sidenav {
            display: none;
          }
        }

        @media screen and (min-width: 642px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
