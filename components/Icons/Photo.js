import React from "react";

export default function Photo({ color }) {
  return (
    <svg
      height="30"
      viewBox="0 0 21 21"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" transform="translate(3 3)">
        <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
          <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />
          <path d="m14.5 10.5-3-3-3 2.985" />
          <path d="m12.5 14.5-9-9-3 3" />
        </g>
        <circle cx="11" cy="4" fill={color} r="1" />
      </g>
    </svg>
  );
}
