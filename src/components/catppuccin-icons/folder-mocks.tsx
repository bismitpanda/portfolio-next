import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderMocks = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="m10.327 15.5 4.795-4.795a1.292 1.292 0 1 0-1.827-1.827L8.5 13.673V15.5zm2.511-6.165 1.827 1.827"
        stroke="#89dceb"
      />
    </g>
  </svg>
);
export default SvgFolderMocks;
