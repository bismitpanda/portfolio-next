import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderCommand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#7f849c"
        d="M14.25 13.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 8 9.75v-.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 .75-.75h5z"
      />
    </g>
  </svg>
);
export default SvgFolderCommand;
