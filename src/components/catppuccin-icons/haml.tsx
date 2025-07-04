import type { SVGProps } from "react";
import * as React from "react";

const SvgHaml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M7.6 9.5s1.75.97 2.55 1.13c.8.17 1.5.8 2.49-.26 1.07-1.15 1.13-1.02.26-1.68-.88-.66-2.41-1.94-2.41-2.69"
        stroke="#cdd6f4"
      />
      <path
        d="M6.87 5.56a.83.83 0 0 0 1.23.27L12 2.5l1 1.04L9.58 6.8a6.47 6.47 0 0 0-2.36 3.56l-1.2 4.13-1.49-.5 1-3.98a6.17 6.17 0 0 0-.47-4.24L3.5 2.04l1.37-.54Z"
        stroke="#f9e2af"
      />
      <path d="m12 4.5-1-1.16ZM5.41 2.62l-1.4.7Z" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgHaml;
