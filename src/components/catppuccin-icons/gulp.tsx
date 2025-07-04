import type { SVGProps } from "react";
import * as React from "react";

const SvgGulp = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m13 4-1 7.5-1 1-.5 3h-5l-.5-3-1-1-.93-7L3 4m5 1.5c2.76 0 5-.67 5-1.5s-2.24-1.5-5-1.5S3 3.17 3 4s2.24 1.5 5 1.5M4 11c1.78.33 3.11.5 4 .5s2.22-.17 4-.5M9.5 4l1-2.5 2-1"
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGulp;
