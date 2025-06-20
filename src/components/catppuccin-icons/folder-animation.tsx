import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderAnimation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path stroke="#f5c2e7" d="m9.5 15 2-3-2-3-2 3zM14 9l1.5 3-1.5 3m-2-6 1.5 3-1.5 3" />
    </g>
  </svg>
);
export default SvgFolderAnimation;
