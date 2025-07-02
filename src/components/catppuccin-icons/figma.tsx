import type { SVGProps } from "react";
import * as React from "react";

const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 11.5h-2a2 2 0 1 0 2 2z" stroke="#a6e3a1" />
      <path d="M7.5 10.5v-4h-2a2 2 0 1 0 0 4z" stroke="#cba6f7" />
      <path d="M7.5 5.5v-4h-2a2 2 0 1 0 0 4z" stroke="#f38ba8" />
      <path d="M10.5 5.5a2 2 0 1 0 0-4h-2v4z" stroke="#fab387" />
      <path
        d="M12.5 8.5a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2"
        stroke="#89dceb"
      />
    </g>
  </svg>
);
export default SvgFigma;
