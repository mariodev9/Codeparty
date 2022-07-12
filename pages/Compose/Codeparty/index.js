import React from "react";
import Button from "../../../components/Button";

export default function Codeparty() {
  return (
    <>
      <form>
        <textarea placeholder="Que estas pensando?"></textarea>
        <div>
          <Button> Share </Button>
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
