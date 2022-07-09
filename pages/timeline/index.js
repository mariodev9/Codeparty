import React from "react";
import Link from "next/link";

export default function Timeline({ user, name }) {
  return (
    <>
      <div>Timeline de {user}</div>
      <h3>{name}</h3>
      <Link href={"/"}>
        <a>Go home</a>
      </Link>
    </>
  );
}

// Timeline.getInitialProps = () => {
//   return { user: "mariodev9" };
// };

export async function getStaticProps() {
  return {
    props: {
      user: "@mariodev9",
      name: "@luciano.mariotti",
    },
  };
}
