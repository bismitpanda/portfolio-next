import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderAnimationOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24L15 7.49M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#f5c2e7"
        d="m9.5 15 2-3-2-3-2 3zM14 9l1.5 3-1.5 3m-2-6 1.5 3-1.5 3"
      />
    </g>
  </svg>
);
export default SvgFolderAnimationOpen;
