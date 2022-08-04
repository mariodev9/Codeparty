import React from "react";

export default function Menu({ color }) {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} fillRule="evenodd">
        <circle cx="10.5" cy="10.5" r="2" />
        <circle cx="5.5" cy="10.5" r="2" />
        <circle cx="15.5" cy="10.5" r="2" />
      </g>
    </svg>
  );
}
