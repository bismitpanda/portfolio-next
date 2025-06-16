import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderServer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path stroke="#f9e2af" d="M8.5 9.5h7v2h-7zm2 0v2m-2 2h7v2h-7zm2 0v2" />
    </g>
  </svg>
);
export default SvgFolderServer;
