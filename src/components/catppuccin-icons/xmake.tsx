import type { SVGProps } from "react";
import * as React from "react";

const SvgXmake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#74c7ec"
        d="M14.04 10.42a6.45 6.45 0 0 0-.56-5.92 6.5 6.5 0 0 0-.73-.94L8.99 6.18z"
      />
      <path stroke="#94e2d5" d="M7.35 7.32 2.2 10.94A6.5 6.5 0 0 0 13 12.15z" />
      <path stroke="#a6e3a1" d="M3.04 3.8a6.47 6.47 0 0 0-1.47 5.14L5.72 6z" />
    </g>
  </svg>
);
export default SvgXmake;
