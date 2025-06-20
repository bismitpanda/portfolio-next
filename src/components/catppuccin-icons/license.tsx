import * as React from "react";
import type { SVGProps } from "react";

const SvgLicense = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 13.5h7M8.01 1v12.06M1.5 3.5h3l1.5-1h4l1.5 1h3M.5 10 3 4.48 5.5 10C4 11 2 11 .5 10m10 0L13 4.48 15.5 10c-1.5 1-3.5 1-5 0"
    />
  </svg>
);
export default SvgLicense;
