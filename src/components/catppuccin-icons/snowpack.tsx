import type { SVGProps } from "react";
import * as React from "react";

const SvgSnowpack = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.5 13.5h13L8 2z" />
      <path d="m5 8 1.5 1.5 1.5-2h3" />
    </g>
  </svg>
);
export default SvgSnowpack;
