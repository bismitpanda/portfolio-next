import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCoverageOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        d="M12 8 8.5 9.167v2.125c0 2.122 1.195 3.641 3.5 4.208 2.361-.58 3.5-2.087 3.5-4.208V9.167Zm-1.502 3.5 1.504 1.5 1.5-2.5"
      />
    </g>
  </svg>
);
export default SvgFolderCoverageOpen;
