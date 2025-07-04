import type { SVGProps } from "react";
import * as React from "react";

const SvgStitches = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cdd6f4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6.23 14.25 8.08-4.66M4.09 13.18l6.9-3.99L8.59 5" />
      <path d="M7.54 11.2 5.1 6.96l6.96-4.01" />
      <path d="M14.5 8A6.5 6.5 0 0 1 8 14.5 6.5 6.5 0 0 1 1.5 8 6.5 6.5 0 0 1 8 1.5 6.5 6.5 0 0 1 14.5 8M1.66 6.64 10 1.83M6.85 6.01l2.4 4.14" />
    </g>
  </svg>
);
export default SvgStitches;
