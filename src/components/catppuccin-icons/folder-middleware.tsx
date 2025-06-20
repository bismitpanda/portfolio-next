import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderMiddleware = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        d="M15.5 13.5v1.2a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8v-1.2H9a1 1 0 0 1 0-2h.5v-1.2a.8.8 0 0 1 .8-.8h1.2V9a1 1 0 0 1 2 0v.5h1.2a.8.8 0 0 1 .8.8v1.2H15a1 1 0 0 0 0 2z"
      />
    </g>
  </svg>
);
export default SvgFolderMiddleware;
