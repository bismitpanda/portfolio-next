import type { SVGProps } from "react";
import * as React from "react";

const SvgProto = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m.5 8.5 3-6h3l-3 6" stroke="#f38ba8" />
      <path d="M6.5 13.5h-3l-3-5 1.36-2.73z" stroke="#89b4fa" />
      <path d="m15.5 7.5-3 6h-3l3-6" stroke="#f9e2af" />
      <path d="M9.5 2.5h3l3 5-1.36 2.73z" stroke="#a6e3a1" />
    </g>
  </svg>
);
export default SvgProto;
