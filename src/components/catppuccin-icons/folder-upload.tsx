import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <g stroke="#89dceb">
        <path d="M9.5 15.5h4M11.5 13.5v-5m-2 2 2-2 2 2" />
      </g>
    </g>
  </svg>
);
export default SvgFolderUpload;
