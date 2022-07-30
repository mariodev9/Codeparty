import React from "react";
import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import useUser from "../../../hooks/useUser";
import { addCode } from "../../../firebase/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { uploadImage } from "../../../firebase/client";
import { useTheme } from "styled-components";
import Nav from "../../../components/Nav";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function Codeparty() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const [file, setFile] = useState("");
  const [img, setImg] = useState("");

  const theme = useTheme();
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    file && uploadImage(file, setImg);
  }, [file]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleDeleteImg = (event) => {
    event.preventDefault();
    setImg("");
    setFile("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);

    addCode({
      avatar: user.avatar,
      content: message,
      userId: user.userId,
      userName: user.name,
      img: img,
    });

    router.push("/Home");
  };

  const isButtonDisabled =
    !message.length && (status || COMPOSE_STATES.LOADING);

  return (
    <>
      <Head>
        <title>Write / Codeparty</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className="code-container">
          <textarea
            placeholder="Que estas pensando?"
            onChange={handleChange}
            value={message}
          ></textarea>
          {img && (
            <div className="img-container">
              <button className="delete-img" onClick={handleDeleteImg}>
                X
              </button>
              <img src={img} />
            </div>
          )}
        </div>
        <div className="buttons-container">
          <div onClick={() => router.replace("/Home")}>Volver</div>
          <Button disabled={isButtonDisabled}> Share </Button>
        </div>
        <input
          type="file"
          name="Add photo"
          id="file-input"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <label htmlFor="file-input">
          <p>Icono de foto</p>
        </label>
      </form>
      <Nav />
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: row;
        }
        form {
          display: flex;
          flex-direction: column;
          margin: 15px 5px;
          height: 90vh;
        }
        .buttons-container {
          margin: 20px 0px;
          display: flex;
          justify-content: space-between;
        }

        textarea {
          border: 0;
          padding: 15px;
          border-radius: 10px;
          font-size: 21px;
          min-height: 200px;
          padding: 15px;
          outline: 0;
          resize: none;
          width: 100%;
          background-color: ${theme.background};
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        img {
          border-radius: 10px;
          width: 100%;
          max-width: 500px;
        }

        .code-container {
          padding: 15px;
          margin: 10px 0px;
          border: solid 1px white;
          border-radius: 10px;
        }

        .delete-img {
          position: relative;
          top: 25px;
          background-color: #000;
        }

        #file-input {
          display: none;
        }

        @media screen and (max-width: 642px) {
          .buttons-container {
            order: 1;
          }
          .code-container {
            order: 2;
          }

          label {
            order: 3;
          }
        }
      `}</style>
    </>
  );
}
