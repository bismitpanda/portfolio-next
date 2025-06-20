import * as React from "react";
import type { SVGProps } from "react";

const SvgPnpm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#fab387" d="M6 2v4" />
      <path stroke="#cdd6f4" d="M10 9.5V14M6 6v8" />
      <path stroke="#fab387" d="M10 2v7.5m4 .5V2H2v4h12" />
      <path stroke="#cdd6f4" d="M2 10v4h12v-4z" />
    </g>
  </svg>
);
export default SvgPnpm;
