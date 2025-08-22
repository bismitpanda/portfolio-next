import type { SVGProps } from "react";
import * as React from "react";

const SvgEslintIgnore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.71 1.5 15.42 8l-3.71 6.5H4.29L.58 8l3.71-6.5z" />
      <path d="m8 4.07 3.5 1.97v3.92L8 11.93 4.5 9.96V6.04z" />
    </g>
  </svg>
);
export default SvgEslintIgnore;
