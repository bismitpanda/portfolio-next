import type { SVGProps } from "react";
import * as React from "react";

const SvgVital = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M8 15S5 6.5 1 4c1 .2 3.3.5 4.5.5 1 .5 2.5 3 2.5 4 0-1 1.5-3.5 2.5-4A31 31 0 0 0 15 4c-4 2.5-7 11-7 11"
        stroke="#cdd6f4"
      />
      <path
        d="M3.4 2.6S5 1 7.7 1 12 2.6 12 2.6m-10.9 4S.5 8.7 2 11a6 6 0 0 0 3.4 3m4.6 0s2.2-.6 3.5-3c1.4-2.2.8-4.5.8-4.5"
        stroke="#cba6f7"
      />
    </g>
  </svg>
);
export default SvgVital;
