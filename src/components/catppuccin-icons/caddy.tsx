import type { SVGProps } from "react";
import * as React from "react";

const SvgCaddy = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M7.5 11.5h3v-4h-5v2m4-2V6a1.5 1.5 0 0 0-3 0v1.5"
        stroke="#a6e3a1"
      />
      <path
        d="M14.05 5.76c.9 2.5.22 5.3-1.75 7.07A6.45 6.45 0 0 1 5.5 14m-2.78-2.2A6.52 6.52 0 0 1 4 2.85a6.45 6.45 0 0 1 8.65.64M14.5 4.5a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m-9 8.5A1.5 1.5 0 0 1 4 14.5 1.5 1.5 0 0 1 2.5 13 1.5 1.5 0 0 1 4 11.5 1.5 1.5 0 0 1 5.5 13m0-1.5 2-2m5-4-1 1"
        stroke="#89dceb"
      />
    </g>
  </svg>
);
export default SvgCaddy;
