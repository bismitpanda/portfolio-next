import * as React from "react";
import type { SVGProps } from "react";

const SvgMarko = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#f38ba8" d="m12 13.5 3.5-5-3.5-6" />
      <path stroke="#89b4fa" d="m4 2.5-3.47 6 3.47 5" />
      <path stroke="#94e2d5" d="M6.43 8.5 4 2.5" />
      <path stroke="#a6e3a1" d="m9 2.5-2.57 6" />
      <path stroke="#f9e2af" d="m9 13.5 3.51-5L9 2.5" />
    </g>
  </svg>
);
export default SvgMarko;
