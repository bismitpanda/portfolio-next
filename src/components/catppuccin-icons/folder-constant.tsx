import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderConstant = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M9.5 14.75q1-1.5 1-6.25m4 0H10q-1 0-1.5 1.25m5-1-.25 3.75c0 1.5.5 2 1.25 2q.75 0 1-1.5"
        stroke="#7f849c"
      />
    </g>
  </svg>
);
export default SvgFolderConstant;
