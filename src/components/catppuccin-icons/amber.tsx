import type { SVGProps } from "react";
import * as React from "react";

const SvgAmber = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m4 5.5 4-4 4 4v5l-4 4-4-4z"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAmber;
