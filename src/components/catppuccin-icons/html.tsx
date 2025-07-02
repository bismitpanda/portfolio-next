import type { SVGProps } from "react";
import * as React from "react";

const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 1.5h13L13 13l-5 2-5-2z" stroke="#fab387" />
      <path d="M11 4.5H5l.25 3h5.5l-.25 3-2.5 1-2.5-1-.08-1" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgHtml;
