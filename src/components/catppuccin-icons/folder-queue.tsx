import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderQueue = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89dceb"
        d="M11.5 7.5 8 9.5l3.5 2 3.5-2zm-3.5 4 3.5 2 3.5-2m-7 2 3.5 2 3.5-2"
      />
    </g>
  </svg>
);
export default SvgFolderQueue;
