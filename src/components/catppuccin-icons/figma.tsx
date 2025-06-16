import * as React from "react";
import type { SVGProps } from "react";

const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#a6e3a1" d="M7.5 11.5h-2a2 2 0 1 0 2 2z" />
      <path stroke="#cba6f7" d="M7.5 10.5v-4h-2a2 2 0 1 0 0 4z" />
      <path stroke="#f38ba8" d="M7.5 5.5v-4h-2a2 2 0 1 0 0 4z" />
      <path stroke="#fab387" d="M10.5 5.5a2 2 0 1 0 0-4h-2v4z" />
      <path
        stroke="#89dceb"
        d="M12.5 8.5a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2"
      />
    </g>
  </svg>
);
export default SvgFigma;
