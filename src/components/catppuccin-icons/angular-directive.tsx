import type { SVGProps } from "react";
import * as React from "react";

const SvgAngularDirective = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="#cba6f7" d="m8 1 6.5 2-1 9.5L8 15l-5.5-2.5-1-9.5z" />
      <path stroke="#cdd6f4" d="m4.5 10.5 3.5-7 3.5 7m-5.796-2h4.635" />
    </g>
  </svg>
);
export default SvgAngularDirective;
