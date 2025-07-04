import type { SVGProps } from "react";
import * as React from "react";

const SvgUnity = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9.5 1 5 3v5.5m-1 3-5.5 3-5.5-3m-1-3V3.83L6.5 1m-5 3L8 8v7.5M14.5 4 8 8"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgUnity;
