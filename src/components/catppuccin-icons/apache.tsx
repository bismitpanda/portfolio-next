import type { SVGProps } from "react";
import * as React from "react";

const SvgApache = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M2.5 14.5a24.3 24.3 0 0 1 1.63-4.36c.21-.42.45-.84.7-1.26 2.75-4.61 6.63-6.8 8.67-7.38-.8 3.52-3.91 10.46-10.15 10.4"
        stroke="#f38ba8"
      />
      <path
        d="M6.14 6.96C8.7 3.64 11.76 1.99 13.5 1.5a18.5 18.5 0 0 1-2.27 5.46"
        stroke="#fab387"
      />
      <path d="M6.5 9.5h-2m1.25-2h2.71" stroke="#f38ba8" />
    </g>
  </svg>
);
export default SvgApache;
