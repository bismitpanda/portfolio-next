import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderImages = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path stroke="#a6e3a1" d="M14.5 15.5 11 12l-2.5 2.5" />
      <path
        stroke="#74c7ec"
        d="M9.5 8.5h4.997a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1"
      />
      <circle cx={13.5} cy={10.5} r={0.5} stroke="#f9e2af" />
    </g>
  </svg>
);
export default SvgFolderImages;
