import * as React from "react";
import type { SVGProps } from "react";

const SvgCodeClimate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.5 13.5 2-1.94L5 7 .55 11.56l1.98 1.94 2.49-2.45zm6-3 2-1.86-4-4.14-3 3 2 2 1-1z"
      transform="matrix(1.00302 0 0 1 -.05 0)"
    />
  </svg>
);
export default SvgCodeClimate;
