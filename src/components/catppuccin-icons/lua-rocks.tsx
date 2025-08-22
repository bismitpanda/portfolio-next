import type { SVGProps } from "react";
import * as React from "react";

const SvgLuaRocks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.544}
    >
      <path
        stroke="#cdd6f4"
        strokeWidth={0.99967824}
        d="M9.868 6.378a.97.97 0 0 1-.97.971.97.97 0 0 1-.972-.97.97.97 0 0 1 .971-.972.97.97 0 0 1 .971.971"
      />
      <path
        stroke="#89b4fa"
        strokeWidth={0.99967824}
        d="M7.602 3.465a4.208 4.208 0 1 0 0 8.417 4.208 4.208 0 0 0 0-8.417m4.532-1.295a.971.971 0 1 0 0 1.942.971.971 0 0 0 0-1.942"
      />
    </g>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.256 1.663 9.046.529.806 3.312v6.902l5.274 5.275 8.42-2.881V5.845l-.682-.665M8.934.584v1.754M.863 10.13l1.558-.585m11.996 2.867-1.976-2.032"
    />
  </svg>
);
export default SvgLuaRocks;
