import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderDatabase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#f9e2af"
        d="M8.5 9.5q1 1 3.5 1t3.5-1m-7 2.5q1 1 3.5 1t3.5-1m-7 2.5v-5q1-1 3.5-1t3.5 1v5q-1 1-3.5 1t-3.5-1"
      />
    </g>
  </svg>
);
export default SvgFolderDatabase;
