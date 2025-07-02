import type { SVGProps } from "react";
import * as React from "react";

const SvgClojure = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.17 10.03A6.5 6.5 0 0 1 1.81 6.02" stroke="#a6e3a1" />
      <path d="M1.87 5.85A6.5 6.5 0 0 1 14.22 9.9" stroke="#89b4fa" />
      <path d="M6.36 4.9a3.5 3.5 0 1 0 3.41 6.12" stroke="#a6e3a1" />
      <path d="M9.77 11.02a3.5 3.5 0 0 0-3.03-6.29" stroke="#89b4fa" />
      <path d="M8 7.5s-1.66 2.48-1.5 3.65" stroke="#cdd6f4" />
      <path
        d="M1.81 6.02C2.47 5 3.83 4.49 5 4.46c4.06 0 3 5.56 5.03 6.86 1.21.52 3.5-.21 4.15-1.32"
        stroke="#cdd6f4"
      />
    </g>
  </svg>
);
export default SvgClojure;
