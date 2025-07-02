import type { SVGProps } from "react";
import * as React from "react";

const SvgR = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M13.5 9.5c.63-.7 1-1.54 1-2.43 0-2.52-2.91-4.57-6.5-4.57S1.5 4.55 1.5 7.07c0 1.9 1.65 3.53 4 4.22"
        stroke="#7f849c"
      />
      <path
        d="M10.5 9.5c.4 0 .86.34 1 .7l1 3.3m-5 0v-8h3.05c.95 0 1.95 1 1.95 2s-1 2-1.95 2H7.5Z"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgR;
