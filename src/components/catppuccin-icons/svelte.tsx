import type { SVGProps } from "react";
import * as React from "react";

const SvgSvelte = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#fab387" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.86 6.72s1.39-1.98.08-3.87C11.286.763 9.44 1.6 9.44 1.6S6.15 3.35 4.33 4.59c-1.4 1-2.24 2.26-1.03 4.37 1.22 2.1 4.58 1.21 4.58 1.21" />
      <path d="M3.14 9.28s-1.39 1.98-.08 3.87c1.31 1.9 3.5 1.24 3.5 1.24s3.29-1.74 5.11-2.98c1.4-1 2.24-2.26 1.03-4.37-1.22-2.1-4.58-1.21-4.58-1.21M6.3 6.96l4.14-2.56m-4.92 7.25L9.66 9.1" />
    </g>
  </svg>
);
export default SvgSvelte;
