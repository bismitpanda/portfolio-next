import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderLib = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.259 7.856h1.17a.585.585 0 0 1 .585.585v6.43a.585.585 0 0 1-.585.585H8.26a.585.585 0 0 1-.586-.585v-6.43a.585.585 0 0 1 .586-.585m2.34 1.754h.586a.585.585 0 0 1 .585.585v4.676a.585.585 0 0 1-.585.585H10.6a.585.585 0 0 1-.586-.585v-4.676a.585.585 0 0 1 .586-.585m2.036.234 1.13-.304a.293.292 0 0 1 .363.204l1.363 5.087a.293.292 0 0 1-.21.35l-1.13.31a.293.292 0 0 1-.357-.21l-1.364-5.086a.293.292 0 0 1 .205-.351"
    />
  </svg>
);
export default SvgFolderLib;
