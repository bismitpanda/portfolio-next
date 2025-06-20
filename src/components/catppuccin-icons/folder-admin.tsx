import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderAdmin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89b4fa"
        d="M15.5 9.25v-.58L12 7.5 8.5 8.67v2.62c0 2.12 1.2 3.64 3.5 4.21m2.5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0"
      />
    </g>
  </svg>
);
export default SvgFolderAdmin;
