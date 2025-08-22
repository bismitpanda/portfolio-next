import type { SVGProps } from "react";
import * as React from "react";

const SvgVitest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#a6e3a1" d="m14.5 8.5-6.5 6-6.5-6" />
      <path stroke="#f9e2af" d="M7.5 11.5 8 8 5 7l4.5-5.5L9 5l3 1z" />
    </g>
  </svg>
);
export default SvgVitest;
