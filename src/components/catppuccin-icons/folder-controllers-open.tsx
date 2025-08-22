import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderControllersOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#fab387"
        d="M11.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1.5-4 1.503-1L13 8.5m-3 6 1.503 1 1.497-1M8.5 13l-1-1.51 1-1.49m6 3 1-1.51-1-1.49"
      />
    </g>
  </svg>
);
export default SvgFolderControllersOpen;
