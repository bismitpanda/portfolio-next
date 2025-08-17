import type { SVGProps } from "react";
import * as React from "react";

const SvgTodo = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 8A6.5 6.5 0 0 1 8 14.5 6.5 6.5 0 0 1 1.5 8 6.5 6.5 0 0 1 8 1.5 6.5 6.5 0 0 1 14.5 8" />
      <path d="m4.5 7.5 2.5 3 4.5-5" />
    </g>
  </svg>
);
export default SvgTodo;
