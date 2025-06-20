import * as React from "react";
import type { SVGProps } from "react";

const SvgClojure = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#a6e3a1" d="M14.17 10.03A6.5 6.5 0 0 1 1.81 6.02" />
      <path stroke="#89b4fa" d="M1.87 5.85A6.5 6.5 0 0 1 14.22 9.9" />
      <path stroke="#a6e3a1" d="M6.36 4.9a3.5 3.5 0 1 0 3.41 6.12" />
      <path stroke="#89b4fa" d="M9.77 11.02a3.5 3.5 0 0 0-3.03-6.29" />
      <path stroke="#cdd6f4" d="M8 7.5s-1.66 2.48-1.5 3.65" />
      <path
        stroke="#cdd6f4"
        d="M1.81 6.02C2.47 5 3.83 4.49 5 4.46c4.06 0 3 5.56 5.03 6.86 1.21.52 3.5-.21 4.15-1.32"
      />
    </g>
  </svg>
);
export default SvgClojure;
