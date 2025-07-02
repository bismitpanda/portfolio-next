import type { SVGProps } from "react";
import * as React from "react";

const SvgPrettier = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 2.5h11m-11 6h5" stroke="#74c7ec" />
      <path d="M1.5 4.5h5m3 4h5" stroke="#f9e2af" />
      <path d="M9.5 4.5h5m-13 2h5m-5 6h5" stroke="#cba6f7" />
      <path d="M9.5 6.5h5m-13 4h11m-11 4h5" stroke="#f38ba8" />
    </g>
  </svg>
);
export default SvgPrettier;
