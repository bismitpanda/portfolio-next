import type { SVGProps } from "react";
import * as React from "react";

const SvgUrl = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m5.5 10.5 5-5M3.73 6.61 2.67 7.67a4 4 0 1 0 5.66 5.66l1.06-1.06m2.88-2.88 1.06-1.06a4 4 0 1 0-5.66-5.66L6.61 3.73"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgUrl;
