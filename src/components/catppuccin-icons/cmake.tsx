import type { SVGProps } from "react";
import * as React from "react";

const SvgCmake = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 11.5-3.5 3H13Z" stroke="#a6e3a1" />
      <path d="m9 1.5 5.5 11-4.5-2z" stroke="#f38ba8" />
      <path d="m1.5 12.5 6-5-.5-6Z" stroke="#89b4fa" />
    </g>
  </svg>
);
export default SvgCmake;
