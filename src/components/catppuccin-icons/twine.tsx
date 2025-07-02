import type { SVGProps } from "react";
import * as React from "react";

const SvgTwine = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 14.5v-12h4v2.29" stroke="#89b4fa" />
      <path
        d="M6.5 13A5.5 5.5 0 0 1 12 7.5h1.5v-4H11A8.5 8.5 0 0 0 2.5 12v2.5h4z"
        stroke="#a6e3a1"
      />
    </g>
  </svg>
);
export default SvgTwine;
