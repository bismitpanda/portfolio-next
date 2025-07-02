import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCore = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M10.5 9.5h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m0 0v-1m3 1v-1m-3 7v-1m3 1v-1m-5-4h1m-1 3h1m5-3h1m-1 3h1"
        stroke="#7f849c"
      />
    </g>
  </svg>
);
export default SvgFolderCore;
