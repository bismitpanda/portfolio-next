import * as React from "react";
import type { SVGProps } from "react";

const SvgFvm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.024 12.85 9 10.505h6.5v2.35zM5.4 8.005.5 3.155l3.433.005L8 7.155c.47.476.47 1.24 0 1.7l-4 4H.5z"
    />
  </svg>
);
export default SvgFvm;
