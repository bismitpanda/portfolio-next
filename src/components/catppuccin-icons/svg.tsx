import type { SVGProps } from "react";
import * as React from "react";

const SvgSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.54 10 6.92-4m-6.92 4a1.5 1.5 0 1 0-2.6 1.5 1.5 1.5 0 0 0 2.6-1.5M8 4v8m0-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4.54 6l6.92 4M4.54 6a1.5 1.5 0 1 0-2.6-1.5A1.5 1.5 0 0 0 4.54 6M8 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3.46-2a1.5 1.5 0 1 0 2.6 1.5 1.5 1.5 0 0 0-2.6-1.5m0-4a1.5 1.5 0 1 0 2.6-1.5 1.5 1.5 0 0 0-2.6 1.5"
    />
  </svg>
);
export default SvgSvg;
