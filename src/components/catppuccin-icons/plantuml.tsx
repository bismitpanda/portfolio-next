import type { SVGProps } from "react";
import * as React from "react";

const SvgPlantuml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.389 10.167h7.222v2.889a1.444 1.444 0 0 1-1.444 1.444H5.833a1.444 1.444 0 0 1-1.444-1.444ZM8 5.833A4.333 4.333 0 0 0 3.667 1.5H1.5v1.444a4.333 4.333 0 0 0 4.333 4.334H8m0 0a4.333 4.333 0 0 1 4.333-4.334H14.5v.723A4.333 4.333 0 0 1 10.167 8H8m0 2.167V5.833"
    />
  </svg>
);
export default SvgPlantuml;
