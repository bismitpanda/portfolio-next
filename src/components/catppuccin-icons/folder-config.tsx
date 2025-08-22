import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#7f849c"
        d="M11.498 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.752-4L15 12l-1.75 3h-3.5L8 12l1.75-3z"
      />
    </g>
  </svg>
);
export default SvgFolderConfig;
