import type { SVGProps } from "react";
import * as React from "react";

const SvgAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 6.5v5m13-5v5m-11-6h9V12c0 .83-.67 1.5-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12Zm9 0c0-2.49-2.01-4-4.5-4s-4.5 1.51-4.5 4m1-5 1 1.5m6-1.5-1 1.5m-5 11.5v2m5-2v2"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAndroid;
