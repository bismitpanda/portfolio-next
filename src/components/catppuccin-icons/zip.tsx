import type { SVGProps } from "react";
import * as React from "react";

const SvgZip = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.5 10v1m1-2v1m-1-2v1m1-2v1m-1-2v1m1-2v1m-1-2v1m0-3v1m1 0v1m7 2.5v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h4.01m-.01 0 5 5h-4a1 1 0 0 1-1-1z"
      fill="none"
      stroke="#cdd6f4"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgZip;
