import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderPrisma = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path d="m15.5 14.25-5 1.25-2-2.25L12 8.5zM12 8.5l-1.5 7" stroke="#94e2d5" />
    </g>
  </svg>
);
export default SvgFolderPrisma;
