import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderScripts = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#cba6f7"
        d="M8.5 13.5V9.75C8.5 9 9 8.5 9.75 8.5h3.75v5.75c0 .75-.5 1.25-1.25 1.25H8.5a1 1 0 0 1 0-2h3a1 1 0 0 0 0 2m2-5h1a1 1 0 0 0 0-2h-1"
      />
    </g>
  </svg>
);
export default SvgFolderScripts;
