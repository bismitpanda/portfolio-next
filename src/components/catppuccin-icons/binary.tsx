import type { SVGProps } from "react";
import * as React from "react";

const SvgBinary = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2" />
      <path d="M10.5 9.5h1v3.05M6 9.5h1c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5m4-6h1c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4c0-.28.22-.5.5-.5m-4.5 0h1v3.05" />
    </g>
  </svg>
);
export default SvgBinary;
