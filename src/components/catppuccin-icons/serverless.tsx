import * as React from "react";
import type { SVGProps } from "react";

const SvgServerless = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6.5 11.5-1 2h9v-2zm2-4-1 2h7v-2zm2-4-1 2h5v-2zm-8 10 1-2h-2v2zm2-4 1-2h-4v2zm2-4 1-2h-6v2z"
    />
  </svg>
);
export default SvgServerless;
