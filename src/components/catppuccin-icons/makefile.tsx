import type { SVGProps } from "react";
import * as React from "react";

const SvgMakefile = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="m9.24 8.47-5.28 5.58c-.56.6-1.47.6-2.04 0a1.57 1.57 0 0 1 0-2.14L7.2 6.32"
        stroke="#fab387"
      />
      <path
        d="m13.74 8.03-.86-.93a2.46 2.46 0 0 1-.64-1.68v-.65l-1.89-2.04A3.7 3.7 0 0 0 7.63 1.5H5.5l.64.61A4.72 4.72 0 0 1 7.5 5.57v1.16l1.46 1.5h1.71l1.57 1.42m-.74.85 3-3"
        stroke="#cdd6f4"
      />
    </g>
  </svg>
);
export default SvgMakefile;
