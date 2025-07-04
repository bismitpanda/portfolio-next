import type { SVGProps } from "react";
import * as React from "react";

const SvgMeson = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cba6f7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5C4 3.75 1.5 8 1.5 12.74 5 15 11 15 14.5 12.75 14.5 8 12 3.75 8 1.5" />
      <path d="M10.43 8.55c-.11.74-.8 1.95-1.67 2.74.12.18.18.39.18.6-.55.3-1.09-.03-1.74-.62a5.77 5.77 0 0 1-1.6-2.96.9.9 0 0 1-.6-.14c.05-.68.73-1.08 1.34-1.32a5.8 5.8 0 0 1 3.29.1c.08-.2.23-.35.4-.45.58.4.5 1.38.4 2.05" />
    </g>
  </svg>
);
export default SvgMeson;
