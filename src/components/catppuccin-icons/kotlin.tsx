import type { SVGProps } from "react";
import * as React from "react";

const SvgKotlin = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 13.5h11L8 8" stroke="#cba6f7" />
      <path d="M8.03 2.5h5.47l-8 8" stroke="#fab387" />
      <path d="M2.5 13.5V8" stroke="#f38ba8" />
      <path d="M8 2.5H2.5V8l3-2.5" stroke="#74c7ec" />
    </g>
  </svg>
);
export default SvgKotlin;
