import type { SVGProps } from "react";
import * as React from "react";

const SvgCuda = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#a6e3a1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.46 9C9.5 12 3.5 13 .5 8c3.53-4.5 7-4.5 11-.5-.62.65-4.52 3.9-8.5.5 0 0 2.5-3 5.5-.5 0 0-1.05.59-1.5.75" />
      <path d="M4.5 4.8V2.5h11v11h-11v-2.3" />
    </g>
  </svg>
);
export default SvgCuda;
