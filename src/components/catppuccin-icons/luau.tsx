import * as React from "react";
import type { SVGProps } from "react";

const SvgLuau = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinejoin="round"
      d="M4.289 1.5 14.5 4.245 11.777 14.5 1.5 11.711Z"
    />
    <path fill="none" stroke="#cdd6f4" strokeLinejoin="round" d="m9.2 5-.7 2.8 2.8.7.7-2.8z" />
  </svg>
);
export default SvgLuau;
