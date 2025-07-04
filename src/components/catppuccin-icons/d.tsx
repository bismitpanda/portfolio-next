import type { SVGProps } from "react";
import * as React from "react";

const SvgD = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 3.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-8-1c1.84 0 3.47.9 4.47 2.29a2 2 0 1 1 1.01 3.71 5.5 5.5 0 0 1-5.48 5H1.5v-11Zm-3.5 2v7H7a3.5 3.5 0 0 0 0-7z"
      fill="none"
      stroke="#eba0ac"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgD;
