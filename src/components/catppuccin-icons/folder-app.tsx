import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderApp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#7f849c"
        d="M11.5 7v1.5m.5 2 2.5 5m-3.5-5-2.5 5m-.708-4.497a4 4 0 0 0 5.495 2.077"
      />
      <circle cx={11.5} cy={9.5} r={1} stroke="#89b4fa" />
    </g>
  </svg>
);
export default SvgFolderApp;
