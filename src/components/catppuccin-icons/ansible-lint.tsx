import * as React from "react";
import type { SVGProps } from "react";

const SvgAnsibleLint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 10.25 7 2.75l3.25 7.5L5.5 6.5m7.868 1.81A6.5 6.5 0 1 0 7 13.5"
    />
    <path
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 11.9 2.5 3.6 4.5-6"
    />
  </svg>
);
export default SvgAnsibleLint;
