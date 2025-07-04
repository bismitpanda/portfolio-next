import type { SVGProps } from "react";
import * as React from "react";

const SvgV = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#89b4fa" strokeLinecap="round" strokeLinejoin="round">
      <path d="m1.5 1.5 4 .5L10 14.5H6z" />
      <path d="M8 8.95 10.5 2l4-.5-4.5 13" />
    </g>
  </svg>
);
export default SvgV;
