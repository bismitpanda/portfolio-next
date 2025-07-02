import type { SVGProps } from "react";
import * as React from "react";

const SvgNix = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M.5 7.5H4m1.39-2L2.05 11" stroke="#74c7ec" />
      <path d="M4 1.5 5.5 4m3.5.5H2.55" stroke="#89b4fa" />
      <path d="m12 1.5-1.5 3m1.01 2.6L8.5 1.5" stroke="#74c7ec" />
      <path d="M15.5 8.52 12 8.5m-1.38 2L14 5" stroke="#89b4fa" />
      <path d="m12.5 14.5-2.5-3m-2.97.02 6.48-.02" stroke="#74c7ec" />
      <path d="m4 14.5 1.5-3M4.53 9l2.97 5.5" stroke="#89b4fa" />
    </g>
  </svg>
);
export default SvgNix;
