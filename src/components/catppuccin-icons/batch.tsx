import type { SVGProps } from "react";
import * as React from "react";

const SvgBatch = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#89b4fa" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 15.5c-.7 0-1.5-.8-1.5-1.5V5c0-.7.8-1.5 1.5-1.5h9c.7 0 1.5.8 1.5 1.5v9c0 .7-.8 1.5-1.5 1.5z" />
      <path d="m1.2 3.8 3.04-2.5S5.17.5 5.7.5h8.4c.66 0 1.4.73 1.4 1.4v7.73a2.7 2.7 0 0 1-.7 1.75l-2.68 3.51M3 8.5l3 2-3 2" />
    </g>
  </svg>
);
export default SvgBatch;
