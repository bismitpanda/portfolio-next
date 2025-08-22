import type { SVGProps } from "react";
import * as React from "react";

const SvgSquirrel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f5e0dc"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.284 8.457h11.381s1.086-5.521-5.47-5.521c-6.555 0-5.911 5.52-5.911 5.52"
    />
    <path
      fill="none"
      stroke="#f5e0dc"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.331.5s1.166 1.279.704 3.268M3.26 8.518s.351 6.941 4.634 6.982c4.283.04 4.838-6.881 4.838-6.881"
    />
  </svg>
);
export default SvgSquirrel;
