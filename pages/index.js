import Head from "next/head";
import { useState, useEffect } from "react";
import Button from "../components/Button";
// import Link from "next/link";
import Codeparty from "../components/Icons/Codeparty";
import { loginWithGitHub, sessionChange, logOut } from "../firebase/client";
import { useRouter } from "next/router";

export default function Home() {
  const [dev, setDev] = useState(undefined);
  const router = useRouter();

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

  // const handleOut = () => {
  //   logOut();
  //   setDev(null);
  // };

  return (
    <>
      <Head>
        <title>Codeparty</title>
        <meta name="description" content="Where the devs share the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Codeparty height={90} width={110} />
        <h1>
          Code<span>Party</span>
        </h1>
        <p>Talk about code.</p>

        {/* {dev != null && <Button onClick={handleOut}>Log Out</Button>} */}

        {dev === null && (
          <Button onClick={handleClick}>Login with github</Button>
        )}

        {dev === undefined && <h1>Loading</h1>}
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
            color: #1f76b8;
          }

          p {
            margin-top: -13px;
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
        `}
      </style>
    </>
  );
}
