import type { SVGProps } from "react";
import * as React from "react";

const SvgVueConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.75-4 1.75 3-1.75 3h-3.5L8 12.5l1.75-3z"
        stroke="#7f849c"
      />
      <path d="M.5.5h4.67L6.5 3.09 7.83.5h4.67l-6 11zm9.47.2L6.5 7.08 3.03.7" stroke="#a6e3a1" />
    </g>
  </svg>
);
export default SvgVueConfig;
