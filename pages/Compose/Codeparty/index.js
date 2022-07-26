import React from "react";
import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import useUser from "../../../hooks/useUser";
import { addCode } from "../../../firebase/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { uploadImage } from "../../../firebase/client";

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

  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    file && uploadImage(file, setImg);
  }, [file]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
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
        <textarea
          placeholder="Que estas pensando?"
          onChange={handleChange}
          value={message}
        ></textarea>
        <div>
          <Button disabled={isButtonDisabled}> Share </Button>
        </div>
        <input
          type="file"
          name="Agregar foto"
          id=""
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </form>
      {img && <img src={img} />}
      <style jsx>{`
        div {
          padding: 15px;
        }
        textarea {
          border: 0;
          font-size: 21px;
          min-height: 200px;
          padding: 15px;
          outline: 0;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  );
}
