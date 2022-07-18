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

export default function Home() {
  const [timeline, setTimeline] = useState([]);
  const [session, onSession] = useState(true);

  const theme = useTheme();
  const user = useUser();
  const router = useRouter();

  console.log(theme.text, "EL COLOR DEL TEXTO");

  const handleOut = () => {
    logOut();
    onSession(false);
  };

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  useEffect(() => {
    user && fetchLatestCodes().then(setTimeline);
  }, [user]);

  // ver con useTheme hook
  const Container = styled.div`
    background-color: ${(props) => props.theme.background};
    bottom: 0;
    border-top: 1px solid #eee;
    display: flex;
    height: 49px;
    position: sticky;
    width: 100%;
    flex-direction: column;
  `;

  const Header = styled.header`
    background-color: ${(props) => props.theme.background};
  `;

  const Nav = styled.div`
    background-color: ${(props) => props.theme.background};
    bottom: 0;
    height: 49px;
    position: sticky;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: solid 1px #c4c9d6;
  `;

  return (
    <>
      <Container>
        <Head>
          <title>Inicio / Codeparty</title>
        </Head>
        <Header>
          <div>{user && <Avatar src={user?.avatar} alt={user?.name} />}</div>
          <CodeParty height={50} width={60} color={theme.logo} />
          {/* HACER LO MISMO PARA LOS LOGOS DEL NAV */}
          <Button onClick={handleOut}>Log Out</Button>
          <TopBar />
        </Header>
        {/* <section className="hola">
      SECTION QUE VA A TENER LA WEB PARA DESKTOP
        <div>SideNav</div> */}
        <section>
          {timeline.map(
            ({ id, userName, avatar, content, createdAt, userId }) => (
              <Code
                avatar={avatar}
                id={id}
                key={id}
                content={content}
                userName={userName}
                createdAt={createdAt}
                userId={userId}
              />
            )
          )}
        </section>
        {/* </section> */}
        <Nav>
          <Link href={"/Home"}>
            <a>
              <HomeIcon color={theme.logo} />
            </a>
          </Link>
          <Link href={"/Home"}>
            <a>
              <Search />
            </a>
          </Link>
          <Link href={"/Compose/Codeparty"}>
            <a>
              <Write />
            </a>
          </Link>
        </Nav>
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
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          display: flex;
          height: 49px;
          position: sticky;
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
