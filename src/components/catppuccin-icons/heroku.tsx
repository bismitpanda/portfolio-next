import type { SVGProps } from "react";
import * as React from "react";

const SvgHeroku = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cba6f7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2" />
      <path d="M5.53 3.58 5.5 8.5s2-2 5-1v5m-5-2v2m5-9c0 1 0 1.49-1 2" />
    </g>
  </svg>
);
export default SvgHeroku;
