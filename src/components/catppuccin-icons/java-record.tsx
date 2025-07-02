import type { SVGProps } from "react";
import * as React from "react";

const SvgJavaRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJavaRecord;
