import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderAdmin = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M15.5 9.25v-.58L12 7.5 8.5 8.67v2.62c0 2.12 1.2 3.64 3.5 4.21m2.5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgFolderAdmin;
