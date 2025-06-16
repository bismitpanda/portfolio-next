import * as React from "react";
import type { SVGProps } from "react";

const SvgSemgrep = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
  </svg>
);
export default SvgSemgrep;
