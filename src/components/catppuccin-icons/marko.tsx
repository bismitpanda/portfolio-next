import type { SVGProps } from "react";
import * as React from "react";

const SvgMarko = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 13.5 3.5-5-3.5-6" stroke="#f38ba8" />
      <path d="m4 2.5-3.47 6 3.47 5" stroke="#89b4fa" />
      <path d="M6.43 8.5 4 2.5" stroke="#94e2d5" />
      <path d="m9 2.5-2.57 6" stroke="#a6e3a1" />
      <path d="m9 13.5 3.51-5L9 2.5" stroke="#f9e2af" />
    </g>
  </svg>
);
export default SvgMarko;
