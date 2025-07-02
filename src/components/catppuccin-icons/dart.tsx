import type { SVGProps } from "react";
import * as React from "react";

const SvgDart = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#74c7ec" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 14.5h4.5v-3h3V7L9.17 1.64c-.28-.29-.8-.47-1.17-.29L3.5 3.5 1.35 8c-.18.37 0 .88.3 1.17z" />
      <path d="M3.5 11V3.5H11m-7.5 0 8 8" />
    </g>
  </svg>
);
export default SvgDart;
