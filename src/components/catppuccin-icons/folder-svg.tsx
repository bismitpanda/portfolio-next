import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#fab387"
        strokeLinecap="square"
        d="M11.5 8.5v6m0-6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.598-2.5-5.196-3m5.196 3a.5.5 0 1 0 .866.5.5.5 0 0 0-.866-.5ZM8.036 9.5a.5.5 0 1 0 .866.5.5.5 0 0 0-.866-.5Zm6.062.5-5.196 3m5.196-3a.5.5 0 1 0 .866-.5.5.5 0 0 0-.866.5Zm-6.062 3.5a.5.5 0 1 0 .866-.5.5.5 0 0 0-.866.5Z"
      />
    </g>
  </svg>
);
export default SvgFolderSvg;
