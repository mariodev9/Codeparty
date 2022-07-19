import React from "react";

export const Avatar = ({ src, alt, withText, width }) => {
  return (
    <>
      <div className="profile">
        <img src={src} width={width} />
        {withText && <p>{alt}</p>}
      </div>
      <style jsx>
        {`
          img {
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
};
