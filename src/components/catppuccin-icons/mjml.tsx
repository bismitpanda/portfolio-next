import type { SVGProps } from "react";
import * as React from "react";

const SvgMjml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-11-2h7a1 1 0 0 1 0 2h-7a1 1 0 1 1 0-2m11 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-11-2h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-2h7a1 1 0 0 1 0 2h-7a1 1 0 1 1 0-2"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMjml;
