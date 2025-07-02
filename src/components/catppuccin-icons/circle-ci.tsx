import type { SVGProps } from "react";
import * as React from "react";

const SvgCircleCi = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cdd6f4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.67 9.5a6.5 6.5 0 1 0 0-3H4.3a4 4 0 1 1 0 3z" />
      <path d="M8.5 8a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5" />
    </g>
  </svg>
);
export default SvgCircleCi;
