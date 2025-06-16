import * as React from "react";
import type { SVGProps } from "react";

const SvgEsbuild = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.5-10.5h2L13 8l-2.5 3.5h-2L11 8zM4 4.5h2L8.5 8 6 11.5H4L6.5 8z"
    />
  </svg>
);
export default SvgEsbuild;
