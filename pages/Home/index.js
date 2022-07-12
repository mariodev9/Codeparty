import React, { useState, useEffect } from "react";
import Code from "../../components/Code";
import { logOut } from "../../firebase/client";
import Button from "../../components/Button";
import { useRouter } from "next/router";

export default function Home({ user, name }) {
  const [timeline, setTimeline] = useState([]);
  const [session, onSession] = useState(true);

  const router = useRouter();

  const handleOut = () => {
    logOut();
    onSession(false);
  };

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);

  return (
    <>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        <Button onClick={handleOut}>Log Out</Button>

        {timeline.map(({ id, username, avatar, message }) => (
          <Code
            avatar={avatar}
            id={id}
            key={id}
            message={message}
            username={username}
          />
        ))}
      </section>
      <nav></nav>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #ccc;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
        }
        section {
          padding-top: 49px;
        }
        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      user: "@mariodev9",
      name: "@luciano.mariotti",
    },
  };
}
