import type { SVGProps } from "react";
import * as React from "react";

const SvgCommitlint = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 9.23c-.74.49-2.04.3-2.59-.45a2.21 2.21 0 0 1 0-2.58c.56-.74 1.85-.92 2.59-.42M5.5 4h1v4.4s-.14 1.12.93 1.1H8.5"
        stroke="#74c7ec"
      />
      <path d="M10.5 9.51h4m-4 3.99 2-2 2 2" stroke="#f38ba8" />
    </g>
  </svg>
);
export default SvgCommitlint;
