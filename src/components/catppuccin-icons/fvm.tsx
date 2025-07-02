import type { SVGProps } from "react";
import * as React from "react";

const SvgFvm = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.024 12.85 9 10.505h6.5v2.35zM5.4 8.005.5 3.155l3.433.005L8 7.155c.47.476.47 1.24 0 1.7l-4 4H.5z"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFvm;
