import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderComponentsOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        d="m9.485 9.516 3.968 3.968m-3.968 0 3.968-3.968m-1.634-1.874 3.507 3.507a.496.496 0 0 1 0 .702l-3.507 3.507a.496.496 0 0 1-.701 0L7.61 11.85a.496.496 0 0 1 0-.702l3.507-3.507a.496.496 0 0 1 .701 0z"
      />
    </g>
  </svg>
);
export default SvgFolderComponentsOpen;
