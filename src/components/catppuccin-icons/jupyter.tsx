import type { SVGProps } from "react";
import * as React from "react";

const SvgJupyter = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M2.5 2a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5m12 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5m-12 12a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        stroke="#7f849c"
      />
      <path
        d="M1.5 9.5c1.67 2 3.83 3 6.5 3s4.83-1 6.5-3m-13-3c1.67-2 3.83-3 6.5-3s4.83 1 6.5 3"
        stroke="#fab387"
      />
    </g>
  </svg>
);
export default SvgJupyter;
