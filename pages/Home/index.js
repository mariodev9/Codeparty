import React, { useState, useEffect } from "react";
import Code from "../../components/Code";
import { logOut } from "../../firebase/client";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import { fetchLatestCodes } from "../../firebase/client";

export default function Home() {
  const [timeline, setTimeline] = useState([]);
  const [session, onSession] = useState(true);

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
    user && fetchLatestCodes().then(setTimeline);
  }, [user]);

  return (
    <>
      <header>
        <h2>Inicio</h2>
        <Button onClick={handleOut}>Log Out</Button>
      </header>
      {/* <section className="hola">
      SECTION QUE VA A TENER LA WEB PARA DESKTOP
        <div>asdasdasd</div> */}
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
      <nav></nav>
      <style jsx>{`
        header {
          background: #fff;
          align-items: center;
          border-bottom: 1px solid #ccc;
          height: 49px;
          display: flex;
          position: sticky;
          justify-content: space-between;
          top: 0;
          width: 100%;
          padding: 15px;
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
        }
        section {
          padding-top: 40px;
        }
        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: sticky;
          width: 100%;
        }

        .hola {
          display: flex;
          flex-direction: row;
        }

        body :global(body) {
          background: #564565;
        }
      `}</style>
    </>
  );
}
