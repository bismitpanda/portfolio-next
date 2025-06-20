import * as React from "react";
import type { SVGProps } from "react";

const SvgNix = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#74c7ec" d="M.5 7.5H4m1.39-2L2.05 11" />
      <path stroke="#89b4fa" d="M4 1.5 5.5 4m3.5.5H2.55" />
      <path stroke="#74c7ec" d="m12 1.5-1.5 3m1.01 2.6L8.5 1.5" />
      <path stroke="#89b4fa" d="M15.5 8.52 12 8.5m-1.38 2L14 5" />
      <path stroke="#74c7ec" d="m12.5 14.5-2.5-3m-2.97.02 6.48-.02" />
      <path stroke="#89b4fa" d="m4 14.5 1.5-3M4.53 9l2.97 5.5" />
    </g>
  </svg>
);
export default SvgNix;
