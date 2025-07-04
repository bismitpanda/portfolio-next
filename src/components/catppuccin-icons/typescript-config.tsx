import type { SVGProps } from "react";
import * as React from "react";

const SvgTypescriptConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.75-4 1.75 3-1.75 3h-3.5L8 12.5l1.75-3z"
        stroke="#7f849c"
      />
      <path
        d="M6.5 11.5h-4a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h7.97c1.1 0 2 .92 2 2V7"
        stroke="#89b4fa"
      />
      <path
        d="M10.5 4.5C10.17 4.17 9.67 4 9 4c-1 0-1.5.5-1.5 1S8 6 9 6s1.5.5 1.5 1S10 8 9 8c-.67 0-1.17-.17-1.5-.5M4 4v4M2.5 4h3"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgTypescriptConfig;
