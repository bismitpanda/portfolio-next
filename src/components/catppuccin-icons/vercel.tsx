import * as React from "react";
import type { SVGProps } from "react";

const SvgVercel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 13.5h13L8 2z"
    />
  </svg>
);
export default SvgVercel;
