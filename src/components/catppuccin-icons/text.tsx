import type { SVGProps } from "react";
import * as React from "react";

const SvgText = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.5 6.5v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h4.01" />
      <path d="m8.5 1.5 5 5h-4a1 1 0 0 1-1-1zm-3 10h5m-5-3h5m-5-3h1" />
    </g>
  </svg>
);
export default SvgText;
