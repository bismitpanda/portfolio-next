import type { SVGProps } from "react";
import * as React from "react";

const SvgWebAssembly = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cba6f7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9.5 12.5 1.5-4 1.5 4m-2.5-1h2m-8.5-3 1 4 1.5-4 1.5 4 1-4" />
      <path d="M10.5 1.5h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2v0" />
      <path d="M5.5 1.5c0 1.38.5 3 2.5 3s2.5-1.62 2.5-3" />
    </g>
  </svg>
);
export default SvgWebAssembly;
