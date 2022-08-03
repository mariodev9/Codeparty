import React from "react";

export default function Back({ color }) {
  return (
    <svg
      height="30"
      viewBox="0 0 21 21"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3.5 6.5)"
      >
        <path d="m14 8v-2c0-1.65685425-1.3431458-3-3-3h-8" />
        <path d="m3 6-3.001-3 3.001-3" />
        <path d="m6 6-3.001-3 3.001-3" />
      </g>
    </svg>
  );
}
