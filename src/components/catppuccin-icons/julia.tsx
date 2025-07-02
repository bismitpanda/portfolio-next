import type { SVGProps } from "react";
import * as React from "react";

const SvgJulia = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#a6e3a1" />
      <path d="M6.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#f38ba8" />
      <path d="M14.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#cba6f7" />
    </g>
  </svg>
);
export default SvgJulia;
