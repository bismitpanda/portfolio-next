import * as React from "react";
import type { SVGProps } from "react";

const SvgEmber = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 9.25c6.11 1.18 8.03-.92 8.79-1.7 1.53-1.57 0-4.71-1.91-3.93-1.91.79-4.59 5.5-2.3 8.63 1.53 2.1 4.34 1.41 8.42-1.75"
    />
  </svg>
);
export default SvgEmber;
