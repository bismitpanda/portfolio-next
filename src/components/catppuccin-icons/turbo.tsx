import type { SVGProps } from "react";
import * as React from "react";

const SvgTurbo = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <circle cx={8} cy={8} r={4.5} stroke="#cdd6f4" />
      <path
        d="M9.58 14.3a6.5 6.5 0 0 1-4.55-.52"
        stroke="#eba0ac"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.52 1.52a6.5 6.5 0 0 1 5.84 5.12"
        stroke="#89b4fa"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.91 10.7a6.5 6.5 0 0 1-2.78 3"
        stroke="#eba0ac"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.38 6.76a6.5 6.5 0 0 1-.42 3.83"
        stroke="#cba6f7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.63 12.8a6.5 6.5 0 0 1-2.1-4.14"
        stroke="#eba0ac"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgTurbo;
