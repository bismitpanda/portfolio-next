import type { SVGProps } from "react";
import * as React from "react";

const SvgReason = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2m7 9h2" />
      <path d="M13 7.5h-2.5v5H13m-6-2 1.5 2m-3 0-.02-5H7c.75 0 1.5.5 1.5 1.5s-.75 1.5-1.5 1.5H5.5" />
    </g>
  </svg>
);
export default SvgReason;
