import Head from "next/head";
import Button from "../components/Button";
// import Link from "next/link";
import Codeparty from "../components/Icons/Codeparty";

export default function Home() {
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
        <Button>Login with github</Button>
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
        `}
      </style>
    </>
  );
}
