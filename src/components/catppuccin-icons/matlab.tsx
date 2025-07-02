import type { SVGProps } from "react";
import * as React from "react";

const SvgMatlab = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4 11 .5 8.5 5 7q.78-1.77 1.89-1.89c.74-.07 1.94-1.28 3.61-3.61M5 7l1.5 1.5"
        stroke="#74c7ec"
      />
      <path
        d="m15.5 12.5-5-11C8.5 6.83 6.33 10 4 11c1.67-.33 2.67.83 3 3.5 3.5-1.5 3.5-3.5 5-4s1.5 1.5 3.5 2"
        stroke="#fab387"
      />
    </g>
  </svg>
);
export default SvgMatlab;
