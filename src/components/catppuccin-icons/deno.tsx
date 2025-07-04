import type { SVGProps } from "react";
import * as React from "react";

const SvgDeno = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m7.67 5.8L8.11 9.56C6.2 9.49 4.5 8.38 4.5 7.03c0-1.4 1.62-2.53 3.61-2.53 2 0 2.89.72 3.61 2.17.02.03.5 1.6 1.45 4.7M8.5 6.5"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgDeno;
