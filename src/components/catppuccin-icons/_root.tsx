import * as React from "react";
import type { SVGProps } from "react";

const SvgRoot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" stroke="#cdd6f4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1" />
      <circle cx={11.5} cy={12} r={3} />
      <circle cx={11.5} cy={12} r={0.5} />
    </g>
  </svg>
);
export default SvgRoot;
