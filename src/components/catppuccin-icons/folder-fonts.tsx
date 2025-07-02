import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderFonts = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M9.163 15.477 11.999 8.5l2.837 6.977M8.5 15.5h1.477m4.046 0H15.5m-5.5-2h4"
        stroke="#f2cdcd"
      />
    </g>
  </svg>
);
export default SvgFolderFonts;
