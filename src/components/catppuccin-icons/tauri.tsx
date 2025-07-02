import type { SVGProps } from "react";
import * as React from "react";

const SvgTauri = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.73 4.02a4.64 4.64 0 1 1 5.55 6.56" stroke="#f9e2af" />
      <path
        d="M7.5 10a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        stroke="#89dceb"
      />
      <path d="M11.26 12a4.64 4.64 0 1 1-5.63-6.55" stroke="#89dceb" />
      <path
        d="M9.5 6a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        stroke="#f9e2af"
      />
    </g>
  </svg>
);
export default SvgTauri;
