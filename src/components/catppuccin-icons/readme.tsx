import * as React from "react";
import type { SVGProps } from "react";

const SvgReadme = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" stroke="#94e2d5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13" />
      <path d="M7 7.5h2v5H7Zm2-3a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1" />
    </g>
  </svg>
);
export default SvgReadme;
