import type { SVGProps } from "react";
import * as React from "react";

const SvgLuauCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinejoin="round">
      <path
        stroke="#a6e3a1"
        strokeLinecap="round"
        d="m8.25 11.9 2.5 3.6 4.5-6"
      />
      <path
        stroke="#89dceb"
        strokeLinecap="round"
        d="M6.508 12.274.75 10.71 3.539.5 13.75 3.245l-1.396 5.257"
      />
      <path stroke="#cdd6f4" d="m8.45 4-.7 2.8 2.8.7.7-2.8z" />
    </g>
  </svg>
);
export default SvgLuauCheck;
