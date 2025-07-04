import type { SVGProps } from "react";
import * as React from "react";

const SvgMermaid = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 2.5c0 6 2.25 5.75 4 7 .83.67 1.17 2 1 4h3c-.17-2 .17-3.33 1-4 1.75-1.25 4-1 4-7C12 2.5 10 3 8 7 6 3 4 2.5 1.5 2.5"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMermaid;
