import type { SVGProps } from "react";
import * as React from "react";

const SvgLicense = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 13.5h7M8.01 1v12.06M1.5 3.5h3l1.5-1h4l1.5 1h3M.5 10 3 4.48 5.5 10C4 11 2 11 .5 10m10 0L13 4.48 15.5 10c-1.5 1-3.5 1-5 0"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLicense;
