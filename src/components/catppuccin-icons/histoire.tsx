import type { SVGProps } from "react";
import * as React from "react";

const SvgHistoire = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#a6e3a1" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 4.5 2.5 3 3-2 1.5 6-2.5-3-3 2z" />
      <path d="m2.5 1.5 11-1 1 14-11 1z" />
    </g>
  </svg>
);
export default SvgHistoire;
