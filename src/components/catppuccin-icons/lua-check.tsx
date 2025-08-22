import type { SVGProps } from "react";
import * as React from "react";

const SvgLuaCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#a6e3a1" d="m8.25 11.9 2.5 3.6 4.5-6" />
      <g strokeWidth={1.154}>
        <path
          stroke="#cdd6f4"
          strokeWidth={1.00013718}
          d="M9.417 6.134a1.3 1.3 0 0 1-1.3 1.3 1.3 1.3 0 0 1-1.3-1.3 1.3 1.3 0 0 1 1.3-1.3 1.3 1.3 0 0 1 1.3 1.3"
        />
        <path
          stroke="#89b4fa"
          strokeWidth={1.00013718}
          d="M6.384 2.234A5.633 5.633 0 1 0 6.5 13.499m5.482-5q.035-.312.035-.632a5.633 5.633 0 0 0-5.633-5.633M12.45.5c-1.733 0-1.733 2.6 0 2.6s1.734-2.6 0-2.6"
        />
      </g>
    </g>
  </svg>
);
export default SvgLuaCheck;
