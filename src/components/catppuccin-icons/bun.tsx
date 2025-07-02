import type { SVGProps } from "react";
import * as React from "react";

const SvgBun = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M.5 8.51c0 5.25 5.5 6 7.5 6s7.5-.75 7.5-6c0-4-4.5-6-7.5-7-3 1-7.5 3-7.5 7"
        stroke="#f5e0dc"
      />
      <path d="M6.5 10.51h3c-.33.67-.83 1-1.5 1s-1.17-.33-1.5-1" stroke="#eba0ac" />
      <path
        d="M5 8.51a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
        stroke="#cdd6f4"
      />
    </g>
  </svg>
);
export default SvgBun;
