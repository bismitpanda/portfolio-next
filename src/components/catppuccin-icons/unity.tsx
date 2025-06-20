import * as React from "react";
import type { SVGProps } from "react";

const SvgUnity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.5 1 5 3v5.5m-1 3-5.5 3-5.5-3m-1-3V3.83L6.5 1m-5 3L8 8v7.5M14.5 4 8 8"
    />
  </svg>
);
export default SvgUnity;
