import * as React from "react";
import type { SVGProps } from "react";

const SvgApollo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" stroke="#cba6f7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.5 3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5M5 10.5l3-6 3.01 6m-5-2H8" />
      <path d="M14.12 5.81a6.5 6.5 0 0 1-3.1 7.94 6.5 6.5 0 0 1-8.3-1.95 6.5 6.5 0 0 1 .78-8.49 6.5 6.5 0 0 1 8.5-.43" />
    </g>
  </svg>
);
export default SvgApollo;
