import type { SVGProps } from "react";
import * as React from "react";

const SvgXaml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.25 4.5 2.25 4-2.25 4h-4.5l-2.25-4 2.25-4z" stroke="#89b4fa" />
      <path d="m2.5 12.5-2-4 2-4" stroke="#cdd6f4" />
      <path d="m6 12 2-3.5h4m-4 0L6 5" stroke="#89b4fa" />
      <path d="m13.5 4.5 2 4-2 4" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgXaml;
