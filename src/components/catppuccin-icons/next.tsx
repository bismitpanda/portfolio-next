import type { SVGProps } from "react";
import * as React from "react";

const SvgNext = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.33 12.85a6.5 6.5 0 1 1 1.55-2.08" />
      <path d="M12.33 12.85 5.5 4.5v7m5-7v3" />
    </g>
  </svg>
);
export default SvgNext;
