import * as React from "react";
import type { SVGProps } from "react";

const SvgRollup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#f38ba8"
        d="M4.37 14.5h9.13l-2-5c1.36-1.08 2-2.13 2-4 0-2.4-2.25-3.97-4-4h-7v11.3"
      />
      <path
        stroke="#f9e2af"
        d="M11.46 6.2c-3.25 3.32-4.37 4.25-7.2 8.3-1.03-.13-1.67-.61-1.74-1.55-.36-.35 4.87-8.22 5.42-9.16.6-1 2.55-2.22 3.78-1.4-1.18-.38-2.58.56-2.41 1.5l.47 1.89c.34.58.66.8 1.18.73.56-.16.67-.53.63-1l-.36-.99"
      />
    </g>
  </svg>
);
export default SvgRollup;
