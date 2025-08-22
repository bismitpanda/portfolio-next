import type { SVGProps } from "react";
import * as React from "react";

const SvgPostcss = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 8A6.5 6.5 0 0 1 8 14.5 6.5 6.5 0 0 1 1.5 8 6.5 6.5 0 0 1 8 1.5 6.5 6.5 0 0 1 14.5 8" />
      <path d="m8 1.5 6 9H2z" />
      <path d="M5.5 5.5h5v5h-5z" />
      <path d="M9.5 8A1.5 1.5 0 0 1 8 9.5 1.5 1.5 0 0 1 6.5 8 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 9.5 8" />
    </g>
  </svg>
);
export default SvgPostcss;
