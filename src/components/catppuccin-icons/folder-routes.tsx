import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderRoutes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        d="M11.5 11.5v4m0-7.5v1.5m-1.5 6h3m-4.5-6v2h5.75l1.25-1-1.25-1z"
      />
    </g>
  </svg>
);
export default SvgFolderRoutes;
