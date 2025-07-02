import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderConnection = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M14.001 12.437a2 2 0 1 0-2.439-2.434M10.5 13.5l3-3m-3.497 1.062A2 2 0 1 0 12.437 14"
        stroke="#94e2d5"
      />
    </g>
  </svg>
);
export default SvgFolderConnection;
