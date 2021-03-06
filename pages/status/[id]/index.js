import React from "react";
import Code from "../../../components/Code";
// import { firestore } from "../../../firebase/admin";
// import { useRouter } from "next/router";

export default function CodePage(props) {
  // const router = useRouter();
  // if (router.isFallback) return <h1>Cargando...</h1>;

  return (
    <>
      <Code {...props} />
      <style jsx>{``}</style>
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

  const apiResponse = await fetch(`http://localhost:3000/api/codes/${id}`);

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
