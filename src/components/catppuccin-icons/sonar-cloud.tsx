import type { SVGProps } from "react";
import * as React from "react";

const SvgSonarCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 7.38a4 4 0 1 0 0 6.24" />
      <path d="M6.5 10.5a4 4 0 1 0 5.49-3.71" />
      <path d="M9.5 10.21A4 4 0 1 0 4 6.8" />
    </g>
  </svg>
);
export default SvgSonarCloud;
