import * as React from "react";
import type { SVGProps } from "react";

const SvgJuce = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none">
      <path
        stroke="#cba6f7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3c-.5-.5-1.5-.5-2 0s.5 1.5 1 2.5c.5-1 1.5-2 1-2.5"
      />
      <path
        stroke="#f9e2af"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 13c-.5.5-1.5.5-2 0s.5-1.5 1-2.5c.5 1 1.5 2 1 2.5"
      />
      <path
        stroke="#94e2d5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7c-.5.5-.5 1.5 0 2s1.5-.5 2.5-1c-1-.5-2-1.5-2.5-1"
      />
      <path
        stroke="#fab387"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7c.5.5.5 1.5 0 2s-1.5-.5-2.5-1c1-.5 2-1.5 2.5-1"
      />
      <path
        stroke="#89b4fa"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.2 3.8c-.7 0-1.4.7-1.4 1.4s1.4.7 2.4 1c-.3-1-.3-2.4-1-2.4"
      />
      <path
        stroke="#fab387"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.2 10.8c0 .7-.7 1.4-1.4 1.4s-.7-1.4-1-2.4c1 .3 2.4.3 2.4 1"
      />
      <path
        stroke="#f38ba8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.2 5.2c0-.7-.7-1.4-1.4-1.4s-.7 1.4-1 2.4c1-.3 2.4-.3 2.4-1"
      />
      <path
        stroke="#a6e3a1"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.2 12.2c-.7 0-1.4-.7-1.4-1.4s1.4-.7 2.4-1c-.3 1-.3 2.4-1 2.4"
      />
      <circle cx={8} cy={8} r={7} stroke="#a6e3a1" />
      <path stroke="#cdd6f4" strokeLinejoin="round" d="M7.9 7.9h.2v.2h-.2z" />
    </g>
  </svg>
);
export default SvgJuce;
