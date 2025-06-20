import * as React from "react";
import type { SVGProps } from "react";

const SvgSolidity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3 11.5 2.5 4 2.5-4 2.5 4 2.5-4-2.5-4-2.5 4m2.5 4h-5m7.5-4H3m10-7-2.5-4-2.5 4-2.5-4-2.5 4 2.5 4 2.5-4M5.5.5h5M3 4.5h10"
    />
  </svg>
);
export default SvgSolidity;
