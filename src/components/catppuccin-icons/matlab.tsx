import * as React from "react";
import type { SVGProps } from "react";

const SvgMatlab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#74c7ec"
        d="M4 11 .5 8.5 5 7q.78-1.77 1.89-1.89c.74-.07 1.94-1.28 3.61-3.61M5 7l1.5 1.5"
      />
      <path
        stroke="#fab387"
        d="m15.5 12.5-5-11C8.5 6.83 6.33 10 4 11c1.67-.33 2.67.83 3 3.5 3.5-1.5 3.5-3.5 5-4s1.5 1.5 3.5 2"
      />
    </g>
  </svg>
);
export default SvgMatlab;
