import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderTemplates = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#eba0ac"
        d="M11.5 10.5h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m2-.333v-.834a.833.833 0 0 0-.833-.833H9.333a.833.833 0 0 0-.833.833v3.334c0 .46.373.833.833.833h.834"
      />
    </g>
  </svg>
);
export default SvgFolderTemplates;
