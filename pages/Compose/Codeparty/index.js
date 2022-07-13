import React from "react";
import { useState } from "react";
import Button from "../../../components/Button";
import useUser from "../../../hooks/useUser";
import { addCode } from "../../../firebase/client";
import { useRouter } from "next/router";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function Codeparty() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const router = useRouter();
  const user = useUser();

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
    });

    router.push("/Home");
  };

  const isButtonDisabled =
    !message.length && (status || COMPOSE_STATES.LOADING);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Que estas pensando?"
          onChange={handleChange}
          value={message}
        ></textarea>
        <div>
          <Button disabled={isButtonDisabled}> Share </Button>
        </div>
      </form>
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
