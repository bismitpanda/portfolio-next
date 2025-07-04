import type { SVGProps } from "react";
import * as React from "react";

const SvgAlex = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cba6f7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2" />
      <path d="M5.5 12.5h5m-5-2h5m-3.75-7H8c.79 0 1.5.71 1.5 1.5v3.5h-2c-.79 0-1-1-1-1.5s.21-1.5 1-1.5h2" />
    </g>
  </svg>
);
export default SvgAlex;
