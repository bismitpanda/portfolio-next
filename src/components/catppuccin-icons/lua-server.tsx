import type { SVGProps } from "react";
import * as React from "react";

const SvgLuaServer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 9.5h7v2h-7zm2 0v2m-2 2h7v2h-7zm2 0v2"
    />
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.084}
    >
      <path
        stroke="#cdd6f4"
        strokeWidth={1.0005536800000001}
        d="M9 5.7a1.2 1.2 0 0 1-1.2 1.2 1.2 1.2 0 0 1-1.2-1.2 1.2 1.2 0 0 1 1.2-1.2A1.2 1.2 0 0 1 9 5.7"
      />
      <path
        stroke="#89b4fa"
        strokeWidth={1.0005536800000001}
        d="M6.2 2.1a5.2 5.2 0 1 0 0 10.4h.3m4.838-6a5.202 5.202 0 0 0-5.139-4.4M11.8.5c-1.6 0-1.6 2.4 0 2.4s1.6-2.4 0-2.4"
      />
    </g>
  </svg>
);
export default SvgLuaServer;
