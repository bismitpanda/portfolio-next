import * as React from "react";
import type { SVGProps } from "react";

const SvgRoblox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.752 14.5 1.5 11.734 4.249 1.5 14.5 4.266ZM9.814 6.965l-2.862-.787-.766 2.857 2.862.787Z"
    />
  </svg>
);
export default SvgRoblox;
