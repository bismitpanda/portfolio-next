import * as React from "react";
import type { SVGProps } from "react";

const SvgZig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 3.5H6l-1.5 2h4l-7 9 4.5-2h4l1.5-2h-4l7-9z"
    />
  </svg>
);
export default SvgZig;
