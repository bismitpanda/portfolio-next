import * as React from "react";
import type { SVGProps } from "react";

const SvgTauri = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#f9e2af" d="M4.73 4.02a4.64 4.64 0 1 1 5.55 6.56" />
      <path
        stroke="#89dceb"
        d="M7.5 10a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
      />
      <path stroke="#89dceb" d="M11.26 12a4.64 4.64 0 1 1-5.63-6.55" />
      <path
        stroke="#f9e2af"
        d="M9.5 6a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
      />
    </g>
  </svg>
);
export default SvgTauri;
