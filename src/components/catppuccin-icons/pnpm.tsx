import type { SVGProps } from "react";
import * as React from "react";

const SvgPnpm = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2v4" stroke="#fab387" />
      <path d="M10 9.5V14M6 6v8" stroke="#cdd6f4" />
      <path d="M10 2v7.5m4 .5V2H2v4h12" stroke="#fab387" />
      <path d="M2 10v4h12v-4z" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgPnpm;
