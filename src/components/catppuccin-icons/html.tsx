import * as React from "react";
import type { SVGProps } from "react";

const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#fab387" d="M1.5 1.5h13L13 13l-5 2-5-2z" />
      <path stroke="#cdd6f4" d="M11 4.5H5l.25 3h5.5l-.25 3-2.5 1-2.5-1-.08-1" />
    </g>
  </svg>
);
export default SvgHtml;
