import type { SVGProps } from "react";
import * as React from "react";

const SvgStylelintIgnore = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#7f849c" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.5 3.48 12 1.5h1.5l2 2-1.5 1L15 6l-7 9.5 2.72-9.32M6.5 3.5l-2-1v4l2-1" />
      <path d="m9.5 3.5 2-1v4l-2-1m-5-2.02L4 1.5H2.5l-2 2 1.5 1L1 6l7 9.5-2.72-9.33M8.5 8a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5" />
      <path d="M6.5 3.5h3v2h-3z" />
    </g>
  </svg>
);
export default SvgStylelintIgnore;
