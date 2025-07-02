import type { SVGProps } from "react";
import * as React from "react";

const SvgGatsby = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cba6f7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.32 4.79a4.64 4.64 0 0 0-7.75 1.86l5.82 5.82a4.65 4.65 0 0 0 3.23-3.97H9.39m-6.03.47 3.71 3.71" />
      <path d="M8 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13" />
    </g>
  </svg>
);
export default SvgGatsby;
