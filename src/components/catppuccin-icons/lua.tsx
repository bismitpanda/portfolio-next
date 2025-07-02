import type { SVGProps } from "react";
import * as React from "react";

const SvgLua = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M10.5 7A1.5 1.5 0 0 1 9 8.5 1.5 1.5 0 0 1 7.5 7 1.5 1.5 0 0 1 9 5.5 1.5 1.5 0 0 1 10.5 7"
        stroke="#cdd6f4"
      />
      <path
        d="M7 2.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m7-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgLua;
