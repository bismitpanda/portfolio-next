import type { SVGProps } from "react";
import * as React from "react";

const SvgEnvrc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#f9e2af"
        d="M4.5 7.5V11m0-6.5V3m0 4.5c2 0 2-3 0-3s-2 3 0 3m5-1V3m1.406 4.45a1.5 1.5 0 0 0-.281-.481C10.375 6.688 10 6.5 9.5 6.5 8.5 6.5 8 7.25 8 8c0 .188.031.375.094.55M3 .5h8A2.5 2.5 0 0 1 13.5 3v4m-7.425 6.5H3A2.5 2.5 0 0 1 .5 11V3A2.5 2.5 0 0 1 3 .5"
      />
      <path
        stroke="#7f849c"
        d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.752-4 1.75 3-1.75 3h-3.5l-1.75-3 1.75-3z"
      />
    </g>
  </svg>
);
export default SvgEnvrc;
