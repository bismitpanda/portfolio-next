import type { SVGProps } from "react";
import * as React from "react";

const SvgLog = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3.5h9v11h-9z" />
      <path d="M11.5 3.45V1.5h-9v11h1.95m3.05-5h3m-3 3h3" />
    </g>
  </svg>
);
export default SvgLog;
