import type { SVGProps } from "react";
import * as React from "react";

const SvgBabel = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.42 4.02c1.1-.68 2.32-1.53 3.63-1.95 1.16-.38 2.43-.73 3.62-.5.6.13 1.27.41 1.57.93.3.5.3 1.18.05 1.68-.97 1.88-5.26 3.6-5.26 3.6m1.2-5.92L2.47 14.5s6.14-2.13 8.23-4.43c.44-.48.96-1.17.75-1.78-.18-.53-.9-.75-1.45-.85-1.56-.26-4.67.92-4.67.92"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBabel;
