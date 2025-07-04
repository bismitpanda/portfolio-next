import type { SVGProps } from "react";
import * as React from "react";

const SvgHaxe = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#fab387" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 1.5H5l3 1.75 3-1.75h3.5V5l-1.75 3 1.75 3v3.5H11l-3-1.75-3 1.75H1.5V11l1.75-3L1.5 5z" />
      <path d="m12.65 8.35-4.3 4.3a.5.5 0 0 1-.7 0l-4.3-4.3a.5.5 0 0 1 0-.7l4.3-4.3c.2-.2.5-.2.7 0l4.3 4.3c.2.2.2.5 0 .7" />
    </g>
  </svg>
);
export default SvgHaxe;
