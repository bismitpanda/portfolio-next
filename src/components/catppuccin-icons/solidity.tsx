import type { SVGProps } from "react";
import * as React from "react";

const SvgSolidity = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3 11.5 2.5 4 2.5-4 2.5 4 2.5-4-2.5-4-2.5 4m2.5 4h-5m7.5-4H3m10-7-2.5-4-2.5 4-2.5-4-2.5 4 2.5 4 2.5-4M5.5.5h5M3 4.5h10"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSolidity;
