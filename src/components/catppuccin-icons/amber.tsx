import * as React from "react";
import type { SVGProps } from "react";

const SvgAmber = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 5.5 4-4 4 4v5l-4 4-4-4z"
    />
  </svg>
);
export default SvgAmber;
