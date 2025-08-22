import type { SVGProps } from "react";
import * as React from "react";

const SvgOdin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.194.502C4.8.416.5 3.047.5 8a7.48 7.48 0 0 0 1.182 4.042zM3.658 14.116A7.476 7.476 0 0 0 8 15.5a7.5 7.5 0 0 0 3.087-14.337Z"
    />
  </svg>
);
export default SvgOdin;
