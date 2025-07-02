import type { SVGProps } from "react";
import * as React from "react";

const SvgVim = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 2.5h4m-3 0v11h3l8-11H11l-6.5 9v-9m10 0H9"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVim;
