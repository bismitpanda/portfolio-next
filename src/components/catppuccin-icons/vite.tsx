import type { SVGProps } from "react";
import * as React from "react";

const SvgVite = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 5.5 3.5-1-6.5 11-6.5-11 3.5 1" stroke="#cba6f7" />
      <path d="m6 1.5-.5 5 2-1-1 3L8 8v3l4-7.5-2 .5L11.5.5Z" stroke="#f9e2af" />
    </g>
  </svg>
);
export default SvgVite;
