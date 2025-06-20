import * as React from "react";
import type { SVGProps } from "react";

const SvgPrettier = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#74c7ec" d="M1.5 2.5h11m-11 6h5" />
      <path stroke="#f9e2af" d="M1.5 4.5h5m3 4h5" />
      <path stroke="#cba6f7" d="M9.5 4.5h5m-13 2h5m-5 6h5" />
      <path stroke="#f38ba8" d="M9.5 6.5h5m-13 4h11m-11 4h5" />
    </g>
  </svg>
);
export default SvgPrettier;
