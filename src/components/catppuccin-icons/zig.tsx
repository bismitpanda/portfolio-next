import type { SVGProps } from "react";
import * as React from "react";

const SvgZig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 3.5H6l-1.5 2h4l-7 9 4.5-2h4l1.5-2h-4l7-9z"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgZig;
