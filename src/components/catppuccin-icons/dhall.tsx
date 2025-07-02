import type { SVGProps } from "react";
import * as React from "react";

const SvgDhall = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3.5 11.5 2-7 6-2 2 2-2 6-7 2 3-3a1 1 0 1 0-1-1zm6.75-10.25 4.5 4.5M2 14.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgDhall;
