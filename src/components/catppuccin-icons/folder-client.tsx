import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderClient = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89b4fa"
        d="M15.5 15.5h-7m.8-7h5.4a.8.8 0 0 1 .8.8v3.4a.8.8 0 0 1-.8.8H9.3a.8.8 0 0 1-.8-.8V9.3a.8.8 0 0 1 .8-.8"
      />
    </g>
  </svg>
);
export default SvgFolderClient;
