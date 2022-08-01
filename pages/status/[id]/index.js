import React from "react";
import Code from "../../../components/Code";
import Sidenav from "../../../components/Sidenav";
import { useRouter } from "next/router";
import useUser from "../../../hooks/useUser";
import CodeParty from "../../../components/Icons/Codeparty";
import { useTheme } from "styled-components";
import SwitchTheme from "../../../components/SwitchTheme";
import { Avatar } from "../../../components/Avatar";

export default function CodePage(props) {
  const router = useRouter();
  const user = useUser();
  const theme = useTheme();

  if (router.isFallback) return <h1>Cargando...</h1>;

  return (
    <>
      <header>
        <div className="avatar-profile">
          {user && <Avatar src={user?.avatar} alt={user?.name} width="34px" />}
        </div>
        <CodeParty height={50} width={60} color={theme.logo} />
        <SwitchTheme />
      </header>
      <div className="main">
        <Sidenav />
        <Code {...props} />
      </div>
      <style jsx>{`
        .main {
          display: flex;
        }

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
          background-color: ${theme.background};
        }
      `}</style>
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "G5wOha9h4h9sxqNPVEXS" } }],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   const { id } = params;

//   firestore
//     .collection("codes")
//     .doc(id)
//     .get()
//     .then((doc) => {
//       const data = doc.data();
//       const id = doc.id;
//       const { createdAt } = data;

//       const props = {
//         ...data,
//         id,
//         createdAt: +createdAt.toDate(),
//       };
//       return { props };
//     })
//     .catch(() => {
//       return { props: {} };
//     });
// }

export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;

  const apiResponse = await fetch(
    `https://codeparty9.vercel.app/api/codes/${id}`
  );

  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return { props };
  }

  if (res) {
    res.writeHead(301, { Location: "/Code404" }).end();
  }
}

// getInitialProps

// CodePage.getInitialProps = (context) => {
//   const { query, res } = context;
//   const { id } = query;

//   return fetch(`http://localhost:3000/api/codes/${id}`).then((apiResponse) => {
//     if (apiResponse.ok) return apiResponse.json();

//     if (res) {
//       res.writeHead(301, { Location: "/Code404" }).end();
//     }
//   });
// };
