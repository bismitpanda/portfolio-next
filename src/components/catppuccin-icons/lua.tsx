import type { SVGProps } from "react";
import * as React from "react";

const SvgLua = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M10.5 7A1.5 1.5 0 0 1 9 8.5 1.5 1.5 0 0 1 7.5 7 1.5 1.5 0 0 1 9 5.5 1.5 1.5 0 0 1 10.5 7"
      />
      <path
        stroke="#89b4fa"
        d="M7 2.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m7-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      />
    </g>
  </svg>
);
export default SvgLua;
