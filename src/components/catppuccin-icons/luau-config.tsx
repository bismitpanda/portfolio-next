import type { SVGProps } from "react";
import * as React from "react";

const SvgLuauConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinejoin="round">
      <path
        stroke="#7f849c"
        strokeLinecap="round"
        d="M11.75 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.75-4 1.75 3-1.75 3H10l-1.75-3 1.75-3z"
      />
      <g strokeWidth={1.083}>
        <path
          stroke="#89dceb"
          strokeLinecap="round"
          strokeWidth={0.99969564}
          d="M6.5 11.486.75 9.926 3.324.5l9.426 2.533L11.564 7.5"
        />
        <path
          stroke="#cdd6f4"
          strokeWidth={0.99969564}
          d="m7.857 3.73-.646 2.585 2.585.646.646-2.584z"
        />
      </g>
    </g>
  </svg>
);
export default SvgLuauConfig;
