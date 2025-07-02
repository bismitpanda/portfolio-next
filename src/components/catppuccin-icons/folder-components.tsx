import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderComponents = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="m9.485 9.516 3.968 3.968m-3.968 0 3.968-3.968m-1.634-1.874 3.507 3.507a.496.496 0 0 1 0 .702l-3.507 3.507a.496.496 0 0 1-.701 0L7.61 11.85a.496.496 0 0 1 0-.702l3.507-3.507a.496.496 0 0 1 .701 0z"
        stroke="#a6e3a1"
      />
    </g>
  </svg>
);
export default SvgFolderComponents;
