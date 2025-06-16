import * as React from "react";
import type { SVGProps } from "react";

const SvgNuxt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 12.5h6l-5-7L7.44 11c-.67.98-1.32 1.48-1.94 1.5h-5l5-9 3 5"
    />
  </svg>
);
export default SvgNuxt;
