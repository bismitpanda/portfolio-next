import type { SVGProps } from "react";
import * as React from "react";

const SvgLuauClient = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 15.5h-7m.8-7h5.4a.8.8 0 0 1 .8.8v3.4a.8.8 0 0 1-.8.8H9.3a.8.8 0 0 1-.8-.8V9.3a.8.8 0 0 1 .8-.8"
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
export default SvgLuauClient;
