import type { SVGProps } from "react";
import * as React from "react";

const SvgNetlify = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="m3.5 3.5 1 1m-1 8 1-1M1.5 8h3m7 0h3M8 1.5v3m0 7v3"
        stroke="#94e2d5"
      />
      <path d="M6.5 9.5v-3h2c.68 0 .97.57 1 1v2" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgNetlify;
