import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderAdminOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24L15.12 7M6.5 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89b4fa"
        d="M15.5 9.25v-.58L12 7.5 8.5 8.67v2.62c0 2.12 1.2 3.64 3.5 4.21m2.5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0"
      />
    </g>
  </svg>
);
export default SvgFolderAdminOpen;
