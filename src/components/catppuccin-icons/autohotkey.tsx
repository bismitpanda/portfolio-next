import type { SVGProps } from "react";
import * as React from "react";

const SvgAutohotkey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <rect
      width={13}
      height={13}
      x={1.5}
      y={1.5}
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={1}
      ry={1}
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.536}
      d="m4.5 11.83 3.263-7.66 3.737 7.66m-5.356-1.69H9.56"
      transform="matrix(.3911 0 0 .39765 1.107 8.405)"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.556}
      d="m4.5 11.83-.007-7.66m6.136-.006-.019 7.666M4.987 8.21h4.452"
      transform="matrix(.39109 0 0 .39152 5.183 8.371)"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.556}
      d="m4.5 11.83-.007-7.66m2.03 4.013 3.081 3.697M4.488 9.277 9.65 4.305"
      transform="matrix(.39109 0 0 .39152 9.085 8.358)"
    />
  </svg>
);
export default SvgAutohotkey;
