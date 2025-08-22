import type { SVGProps } from "react";
import * as React from "react";

const SvgJulia = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#a6e3a1" d="M10.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
      <path stroke="#f38ba8" d="M6.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
      <path stroke="#cba6f7" d="M14.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
    </g>
  </svg>
);
export default SvgJulia;
