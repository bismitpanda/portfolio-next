import * as React from "react";
import type { SVGProps } from "react";

const SvgNuget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 3.5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2M2 2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m4.5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgNuget;
