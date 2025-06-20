import * as React from "react";
import type { SVGProps } from "react";

const SvgBun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#f5e0dc"
        d="M.5 8.51c0 5.25 5.5 6 7.5 6s7.5-.75 7.5-6c0-4-4.5-6-7.5-7-3 1-7.5 3-7.5 7"
      />
      <path stroke="#eba0ac" d="M6.5 10.51h3c-.33.67-.83 1-1.5 1s-1.17-.33-1.5-1" />
      <path
        stroke="#cdd6f4"
        d="M5 8.51a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      />
    </g>
  </svg>
);
export default SvgBun;
