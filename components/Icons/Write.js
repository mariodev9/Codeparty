export default function Write({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 39 51"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.2479 5.42515L30.4969 0.698104C29.5648 0.0454351 28.2729 0.282255 27.6113 1.22706L14.2458 20.315L2.11886 37.6341L12.2452 44.7247L37.7377 8.31763C38.3993 7.37283 38.18 6.07782 37.2479 5.42515Z"
        fill={color}
      />
      <path
        d="M5.99531 42.8742L0.932114 39.329L0.649181 49.0527C0.628272 49.7713 1.34983 50.2765 2.01796 50.0111L11.0585 46.4195L5.99531 42.8742Z"
        fill={color}
      />
    </svg>
  );
}
