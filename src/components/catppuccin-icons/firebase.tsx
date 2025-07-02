import type { SVGProps } from "react";
import * as React from "react";

const SvgFirebase = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3.5 12.5 9-8 1 9-5 2zm0 0 5-9 1.9 2.78M3.5 12.5l1-11 3.1 3.1"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFirebase;
