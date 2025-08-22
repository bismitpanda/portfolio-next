import type { SVGProps } from "react";
import * as React from "react";

const SvgFirebase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.5 12.5 9-8 1 9-5 2zm0 0 5-9 1.9 2.78M3.5 12.5l1-11 3.1 3.1"
    />
  </svg>
);
export default SvgFirebase;
