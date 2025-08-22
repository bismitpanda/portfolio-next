import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderMocksOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89dceb"
        d="m10.327 15.5 4.795-4.795a1.292 1.292 0 1 0-1.827-1.827L8.5 13.673V15.5zm2.511-6.165 1.827 1.827"
      />
    </g>
  </svg>
);
export default SvgFolderMocksOpen;
