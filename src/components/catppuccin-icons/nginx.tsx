import type { SVGProps } from "react";
import * as React from "react";

const SvgNginx = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 10.5v-5l5 5v-5" />
      <path d="M1.5 11.5v-7L8 .5l6.5 4v7l-6.5 4z" />
    </g>
  </svg>
);
export default SvgNginx;
