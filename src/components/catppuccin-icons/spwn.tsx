import * as React from "react";
import type { SVGProps } from "react";

const SvgSpwn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none">
      <path stroke="#a6e3a1" d="M5.5 6a4.5 4.5 0 1 0 4.5 4.5" />
      <path stroke="#f5c2e7" d="M10 11a5 5 0 1 0-5-5" />
      <path
        stroke="#cdd6f4"
        d="m8.803 10.096-.353-.353-.354.353-1.914 1.914a.5.5 0 0 1-.707 0L4.06 10.596a.5.5 0 0 1 0-.707l1.914-1.914.353-.354-.353-.353-.914-.914a.5.5 0 0 1 .353-.854H10a.5.5 0 0 1 .5.5v4.586a.5.5 0 0 1-.854.353z"
      />
    </g>
  </svg>
);
export default SvgSpwn;
