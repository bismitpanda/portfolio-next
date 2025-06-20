import * as React from "react";
import type { SVGProps } from "react";

const SvgNetlify = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#94e2d5" d="m3.5 3.5 1 1m-1 8 1-1M1.5 8h3m7 0h3M8 1.5v3m0 7v3" />
      <path stroke="#cdd6f4" d="M6.5 9.5v-3h2c.68 0 .97.57 1 1v2" />
    </g>
  </svg>
);
export default SvgNetlify;
