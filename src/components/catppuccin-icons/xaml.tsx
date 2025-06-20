import * as React from "react";
import type { SVGProps } from "react";

const SvgXaml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#89b4fa" d="m10.25 4.5 2.25 4-2.25 4h-4.5l-2.25-4 2.25-4z" />
      <path stroke="#cdd6f4" d="m2.5 12.5-2-4 2-4" />
      <path stroke="#89b4fa" d="m6 12 2-3.5h4m-4 0L6 5" />
      <path stroke="#cdd6f4" d="m13.5 4.5 2 4-2 4" />
    </g>
  </svg>
);
export default SvgXaml;
