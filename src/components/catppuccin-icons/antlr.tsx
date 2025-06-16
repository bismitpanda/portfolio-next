import * as React from "react";
import type { SVGProps } from "react";

const SvgAntlr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" stroke="#fab387" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0" />
      <path d="m8 9.5 3 1-3-6-3 6" />
    </g>
  </svg>
);
export default SvgAntlr;
