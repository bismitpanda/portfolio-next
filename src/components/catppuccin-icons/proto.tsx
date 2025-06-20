import * as React from "react";
import type { SVGProps } from "react";

const SvgProto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#f38ba8" d="m.5 8.5 3-6h3l-3 6" />
      <path stroke="#89b4fa" d="M6.5 13.5h-3l-3-5 1.36-2.73z" />
      <path stroke="#f9e2af" d="m15.5 7.5-3 6h-3l3-6" />
      <path stroke="#a6e3a1" d="M9.5 2.5h3l3 5-1.36 2.73z" />
    </g>
  </svg>
);
export default SvgProto;
