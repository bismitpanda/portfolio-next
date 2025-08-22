import type { SVGProps } from "react";
import * as React from "react";

const SvgCargo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" fillRule="evenodd" stroke="#fab387" strokeLinejoin="round">
      <path
        strokeLinecap="round"
        d="M1.5 7 8 10.5 14.5 7m-10-2.5 3.503 2L14.498 3M4.5 5.5v7m3.5-6V14"
      />
      <path strokeLinecap="round" d="M8.003 3 11.5 4.5v8" />
      <path
        strokeLinecap="square"
        d="M1.5 6.984V11l6.503 3.5L14.5 11V3L11 1.5l-6.5 3v1z"
      />
    </g>
  </svg>
);
export default SvgCargo;
