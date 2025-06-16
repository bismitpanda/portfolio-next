import * as React from "react";
import type { SVGProps } from "react";

const SvgZap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.85 9.301a.644.65 0 0 1-.502-1.06L8.72 1.605a.322.325 0 0 1 .554.3L8.039 5.82a.644.65 0 0 0 .605.878h4.506a.644.65 0 0 1 .502 1.06L7.28 14.395a.322.325 0 0 1-.554-.3l1.236-3.916a.644.65 0 0 0-.605-.878Z"
    />
  </svg>
);
export default SvgZap;
