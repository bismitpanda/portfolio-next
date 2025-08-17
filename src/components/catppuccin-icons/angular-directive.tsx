import type { SVGProps } from "react";
import * as React from "react";

const SvgAngularDirective = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 1 6.5 2-1 9.5L8 15l-5.5-2.5-1-9.5z" stroke="#cba6f7" />
      <path d="m4.5 10.5 3.5-7 3.5 7m-5.796-2h4.635" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgAngularDirective;
