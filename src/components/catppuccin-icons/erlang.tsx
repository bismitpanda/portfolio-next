import type { SVGProps } from "react";
import * as React from "react";

const SvgErlang = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 5.5c0-1.25 1-2 2-2s2 .75 2 2z" />
      <path d="M13.5 13c.47-.57 1.12-1.24 1.5-2l-2.25-1.25c-.74 1.36-1.76 2.75-3.25 2.75-2.1 0-3-2.3-3-5h8c.05-1.61-.31-3.45-1-4.5M3 13c-1.08-1.3-1.5-3-1.5-5S2.1 4.24 3 3" />
    </g>
  </svg>
);
export default SvgErlang;
