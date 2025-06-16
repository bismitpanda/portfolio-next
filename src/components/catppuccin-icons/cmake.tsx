import * as React from "react";
import type { SVGProps } from "react";

const SvgCmake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#a6e3a1" d="m6 11.5-3.5 3H13Z" />
      <path stroke="#f38ba8" d="m9 1.5 5.5 11-4.5-2z" />
      <path stroke="#89b4fa" d="m1.5 12.5 6-5-.5-6Z" />
    </g>
  </svg>
);
export default SvgCmake;
