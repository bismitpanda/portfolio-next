import type { SVGProps } from "react";
import * as React from "react";

const SvgVitest = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14.5 8.5-6.5 6-6.5-6" stroke="#a6e3a1" />
      <path d="M7.5 11.5 8 8 5 7l4.5-5.5L9 5l3 1z" stroke="#f9e2af" />
    </g>
  </svg>
);
export default SvgVitest;
