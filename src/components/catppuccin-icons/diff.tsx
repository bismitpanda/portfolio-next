import * as React from "react";
import type { SVGProps } from "react";

const SvgDiff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#a6e3a1" d="M10 6H6m2-2v4" />
      <path stroke="#f38ba8" d="M10 11.5H6" />
      <path
        stroke="#cdd6f4"
        d="M6.1.5h3.8c1.44 0 2.6 1.09 2.6 2.43v10.14c0 1.34-1.16 2.43-2.6 2.43H6.1c-1.44 0-2.6-1.09-2.6-2.43V2.93C3.5 1.6 4.66.5 6.1.5"
      />
    </g>
  </svg>
);
export default SvgDiff;
