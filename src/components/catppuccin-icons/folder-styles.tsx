import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderStyles = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M8.5 15.5v-1.555a1.556 1.556 0 1 1 1.556 1.555zm7-7a6.22 6.22 0 0 0-4.978 3.967M15.5 8.5a6.22 6.22 0 0 1-3.967 4.978m-.077-2.645a3.5 3.5 0 0 1 1.71 1.711"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgFolderStyles;
