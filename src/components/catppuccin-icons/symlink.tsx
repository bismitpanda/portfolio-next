import type { SVGProps } from "react";
import * as React from "react";

const SvgSymlink = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.5 6.5v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2m0-9c0-1.1.9-2 2-2h4.01m-.01 0 5 5h-4a1 1 0 0 1-1-1z"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M.5 14.503V10.79c0-1.539 1.175-2.786 2.625-2.786H7"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 10.5 7.125 8 4.5 5.5"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSymlink;
