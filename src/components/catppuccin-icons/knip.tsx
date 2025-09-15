import type { SVGProps } from "react";
import * as React from "react";

const SvgKnip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.959 1C9.455 3.733 8.516 5.643 7.617 7.97m7.883.673c-2.343-.075-4.137-.184-5.925-.398m-4.76-.792A2.208 2.274 88.787 1 0 .793 5.395a2.208 2.274 88.787 0 0 4.02 2.058m0 0a65.473 67.433 88.787 0 0 2.803.517m-.941 2.617a2.207 2.273 88.787 1 0-.176 4.411 2.207 2.273 88.787 0 0 .176-4.41zm0 0a65.473 67.433 88.787 0 1 .941-2.617"
    />
  </svg>
);
export default SvgKnip;
