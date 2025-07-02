import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderLayouts = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M9 8.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5m-.5 2h7m-5 .5v4"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgFolderLayouts;
