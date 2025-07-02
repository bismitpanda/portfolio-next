import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCypress = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M11 12.157a1.41 1.41 0 0 1-1.387.403c-.637-.168-1.091-.763-1.112-1.457s.396-1.32 1.022-1.53a1.41 1.41 0 0 1 1.476.374M14.5 12.5l-1.5-3m.5 6 2-6"
        stroke="#a6e3a1"
      />
    </g>
  </svg>
);
export default SvgFolderCypress;
