import * as React from "react";
import type { SVGProps } from "react";

const SvgEnv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 8.5V12m0-6.5V4m0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 3.5v-1.5m0-3V4m0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5"
    />
  </svg>
);
export default SvgEnv;
