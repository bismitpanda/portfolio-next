import * as React from "react";
import type { SVGProps } from "react";

const SvgTwine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#89b4fa" d="M2.5 14.5v-12h4v2.29" />
      <path
        stroke="#a6e3a1"
        d="M6.5 13A5.5 5.5 0 0 1 12 7.5h1.5v-4H11A8.5 8.5 0 0 0 2.5 12v2.5h4z"
      />
    </g>
  </svg>
);
export default SvgTwine;
