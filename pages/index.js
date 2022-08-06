import Head from "next/head";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import CodeParty from "../components/Icons/Codeparty";
import { loginWithGitHub, sessionChange, logOut } from "../firebase/client";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import Loading from "../components/Loading";

export default function Home() {
  const [dev, setDev] = useState(undefined);
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    sessionChange(setDev);
  }, []);

  useEffect(() => {
    dev && router.replace("/Home");
  }, [dev]);

  const handleClick = () => {
    loginWithGitHub().catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <Head>
        <title>Codeparty</title>
        <meta name="description" content="Where the devs share the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <CodeParty height={90} width={110} color={theme.logo} />
        <h1>
          Code<span>Party</span>
        </h1>
        <p>Talk about code.</p>

        <div className="button-container">
          {dev === null && (
            <Button onClick={handleClick}>Login with github</Button>
          )}

          {dev === undefined && <Loading />}
        </div>
      </section>
      <style jsx>
        {`
          section {
            display: grid;
            height: 90vh;
            place-content: center;
            place-items: center;
          }

          h1 {
            font-size: 27px;
            color: ##191c25;
            font-weight: 700;
            margin-top: 35px;
          }
          span {
            color: ${theme.logo};
          }

          p {
            margin-top: 13px;
            font-size: 0.8rem;
          }

          img {
            width: 60px;
            border-radius: 50%;
          }

          .profile {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 20px;
          }

          .button-container {
            margin-top: 65px;
            height: 50px;
          }
        `}
      </style>
    </>
  );
}
