import type { SVGProps } from "react";
import * as React from "react";

const SvgLuau = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.289 1.5 14.5 4.245 11.777 14.5 1.5 11.711Z"
      fill="none"
      stroke="#89dceb"
      strokeLinejoin="round"
    />
    <path
      d="m9.2 5-.7 2.8 2.8.7.7-2.8z"
      fill="none"
      stroke="#cdd6f4"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLuau;
