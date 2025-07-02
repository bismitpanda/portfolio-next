import type { SVGProps } from "react";
import * as React from "react";

const SvgXmake = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M14.04 10.42a6.45 6.45 0 0 0-.56-5.92 6.5 6.5 0 0 0-.73-.94L8.99 6.18z"
        stroke="#74c7ec"
      />
      <path d="M7.35 7.32 2.2 10.94A6.5 6.5 0 0 0 13 12.15z" stroke="#94e2d5" />
      <path d="M3.04 3.8a6.47 6.47 0 0 0-1.47 5.14L5.72 6z" stroke="#a6e3a1" />
    </g>
  </svg>
);
export default SvgXmake;
