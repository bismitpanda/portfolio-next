import type { SVGProps } from "react";
import * as React from "react";

const SvgWrangler = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75.5 12.5 8l-5.75 7.5m-1.438-1.875L1 8l4.312-5.625"
    />
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.25.5 15 8l-5.75 7.5"
    />
  </svg>
);
export default SvgWrangler;
