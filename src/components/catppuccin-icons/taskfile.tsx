import * as React from "react";
import type { SVGProps } from "react";

const SvgTaskfile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 11.752 8 15.5l-6.5-3.752.002-7.5L8 .5 14.5 4.252zM1.5 4.25 8 8m6.5-3.75L8 8m.003 0v7.5"
    />
  </svg>
);
export default SvgTaskfile;
