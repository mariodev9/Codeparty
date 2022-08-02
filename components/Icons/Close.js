import React from "react";

export default function Close({ color }) {
  return (
    <svg
      height="30"
      viewBox="0 0 21 21"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.2"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="matrix(-1 0 0 1 18 3)"
      >
        <path d="m10.595 10.5 2.905-3-2.905-3" />
        <path d="m13.5 7.5h-9" />
        <path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c.0005616 1.1043502.8956499 1.9996898 2 2.0005615l8 .0022461" />
      </g>
    </svg>
  );
}
