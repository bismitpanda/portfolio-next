import type { SVGProps } from "react";
import * as React from "react";

const SvgUnocss = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0" stroke="#7f849c" />
      <path
        d="M7 12c0 1.75-1.25 3-3 3s-3-1.25-3-3V9h6zm2-8c0-1.75 1.25-3 3-3s3 1.25 3 3v3H9Z"
        stroke="#cdd6f4"
      />
    </g>
  </svg>
);
export default SvgUnocss;
