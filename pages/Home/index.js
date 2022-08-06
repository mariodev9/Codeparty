import React, { useState, useEffect } from "react";
import { logOut, listenLatestCodes } from "../../firebase/client";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import Code from "../../components/Code";
import { useTheme } from "styled-components";

import Head from "next/head";

import Layout from "../../components/Layout";
import Loading from "../../components/Loading";

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
    if (user) {
      listenLatestCodes(setTimeline);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Inicio / Codeparty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        {timeline.length ? (
          timeline.map(
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
          )
        ) : (
          <div className="loading-container">
            <Loading />
          </div>
        )}
      </Layout>

      <style jsx>{`
        .loading-container {
          height: 80vh;
          align-items: center;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
