import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderIntellij = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path stroke="#cba6f7" d="m8.5 15.5 3.057.008" />
      <path stroke="#f38ba8" d="M10 8.5v4m-1-4h2m-2 4h2" />
      <path stroke="#89b4fa" d="M14.5 8.5v3s0 1-1 1-1-1-1-1" />
    </g>
  </svg>
);
export default SvgFolderIntellij;
