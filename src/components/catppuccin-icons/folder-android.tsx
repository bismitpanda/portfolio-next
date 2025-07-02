import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M15.5 14a3.5 3.5 0 1 0-6.99 0l-.01 1.5h7zm-1-2.97 1-2.03m-6 2.03L8.5 9"
        stroke="#a6e3a1"
      />
    </g>
  </svg>
);
export default SvgFolderAndroid;
