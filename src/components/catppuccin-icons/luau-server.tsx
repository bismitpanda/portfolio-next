import type { SVGProps } from "react";
import * as React from "react";

const SvgLuauServer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 9.5h7v2h-7zm2 0v2m-2 2h7v2h-7zm2 0v2"
    />
    <g fill="none" strokeLinejoin="round">
      <path
        stroke="#89dceb"
        strokeLinecap="round"
        d="M6.5 11.418 1 9.925 3.574.5 13 3.033 12.08 6.5"
      />
      <path stroke="#cdd6f4" d="m8.107 3.73-.646 2.585 2.585.646.646-2.584Z" />
    </g>
  </svg>
);
export default SvgLuauServer;
