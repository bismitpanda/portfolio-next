import type { SVGProps } from "react";
import * as React from "react";

const SvgEjs = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.5 13.5.5 8l5-5.5m2.99 11 6.01-11M9 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEjs;
