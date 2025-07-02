import type { SVGProps } from "react";
import * as React from "react";

const SvgIonic = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#89b4fa" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.6 3.4A6.5 6.5 0 1 0 14 5.5" />
      <path d="M10.5 8A2.5 2.5 0 0 1 8 10.5 2.5 2.5 0 0 1 5.5 8 2.5 2.5 0 0 1 8 5.5 2.5 2.5 0 0 1 10.5 8M13 3.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5" />
    </g>
  </svg>
);
export default SvgIonic;
