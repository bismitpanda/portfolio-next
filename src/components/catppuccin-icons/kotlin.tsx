import * as React from "react";
import type { SVGProps } from "react";

const SvgKotlin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#cba6f7" d="M2.5 13.5h11L8 8" />
      <path stroke="#fab387" d="M8.03 2.5h5.47l-8 8" />
      <path stroke="#f38ba8" d="M2.5 13.5V8" />
      <path stroke="#74c7ec" d="M8 2.5H2.5V8l3-2.5" />
    </g>
  </svg>
);
export default SvgKotlin;
