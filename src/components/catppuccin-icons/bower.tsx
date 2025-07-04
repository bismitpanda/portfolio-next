import type { SVGProps } from "react";
import * as React from "react";

const SvgBower = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M10.77 3.5c.13-.28.27-.53.45-.75.67-.83 1.75-1.25 3.25-1.25-.5 2.17-1 3.5-1.5 4s-1.33.83-2.5 1c-.03-.45-.05-.79-.05-1"
        stroke="#89dceb"
      />
      <path
        d="M6.47 4.5a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m2 5.5c.67.17 1.17.08 1.5-.25q1.005.255 1.5-.75c.83-.17 1.17-.67 1-1.5"
        stroke="#f9e2af"
      />
      <path
        d="m8.47 6.5 7 1c.17 1-.08 2.17-.75 2.5 0 .67-.58 1-1.75 1-.33.33-.67.5-1 .5s-.67-.17-1-.5c-.33.33-.67.58-1 .75s-.75.08-1.25-.25"
        stroke="#a6e3a1"
      />
      <path
        d="m8.72 11.5.75 2c.17.5 0 .83-.5 1-.43.14-.75-.25-1.25-.25s-.56.65-.75.75c-.67.33-1.17.17-1.5-.5l-.5-1.5c-.33.33-.75.5-1.25.5-.55 0-2.03-1.2-2.79-3.5"
        stroke="#f9e2af"
      />
      <path
        d="M.93 10a9.5 9.5 0 0 1-.46-3c0-4.25 3.5-5.5 5.5-5.5 1.33 0 2.5.67 3.5 2l2.5 1-3.5 2M.97 10c1.33.33 2.33.17 3-.5q3.495.495 4.5-3"
        stroke="#eba0ac"
      />
    </g>
  </svg>
);
export default SvgBower;
