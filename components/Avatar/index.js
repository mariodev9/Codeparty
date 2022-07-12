import React from "react";

export const Avatar = ({ src, alt, withText }) => {
  return (
    <>
      <div className="profile">
        <img src={src} />
        {withText && <p>{alt}</p>}
      </div>
      <style jsx>
        {`
          img {
            width: 49px;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
};
