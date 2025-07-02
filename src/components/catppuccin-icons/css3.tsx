import type { SVGProps } from "react";
import * as React from "react";

const SvgCss3 = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 1.5h13L13 13l-5 2-5-2z" stroke="#89b4fa" />
      <path d="M5 4.5h6l-.5 6-2.5 1-2.5-1-.08-1m1.08-2h4" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgCss3;
