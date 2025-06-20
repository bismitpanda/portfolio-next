import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderUtils = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        d="m15.5 14-1.265-1.266a3 3 0 0 0-3.969-3.97L12 10.5 10.5 12l-1.736-1.733a3 3 0 0 0 3.97 3.968L14 15.5"
      />
    </g>
  </svg>
);
export default SvgFolderUtils;
