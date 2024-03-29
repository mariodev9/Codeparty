import React from "react";

export default function Save({ color }) {
  return (
    <svg
      height="31"
      viewBox="0 0 21 21"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.2"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 4)"
      >
        <path d="m2.5.5h7l3 3v7c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-8c0-1.1045695.8954305-2 2-2z" />
        <path d="m4.50000081 8.5h4c.55228475 0 1 .44771525 1 1v3h-6v-3c0-.55228475.44771525-1 1-1z" />
        <path d="m3.5 3.5h2v2h-2z" />
      </g>
    </svg>
  );
}
