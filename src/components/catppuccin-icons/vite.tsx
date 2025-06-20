import * as React from "react";
import type { SVGProps } from "react";

const SvgVite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#cba6f7" d="m11 5.5 3.5-1-6.5 11-6.5-11 3.5 1" />
      <path stroke="#f9e2af" d="m6 1.5-.5 5 2-1-1 3L8 8v3l4-7.5-2 .5L11.5.5Z" />
    </g>
  </svg>
);
export default SvgVite;
