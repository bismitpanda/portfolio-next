import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderControllers = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M11.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1.5-4 1.503-1L13 8.5m-3 6 1.503 1 1.497-1M8.5 13l-1-1.51 1-1.49m6 3 1-1.51-1-1.49"
        stroke="#fab387"
      />
    </g>
  </svg>
);
export default SvgFolderControllers;
