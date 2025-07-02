import type { SVGProps } from "react";
import * as React from "react";

const SvgRubyGem = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 12.5 4.5-5-2-2h-5l-2 2z" />
      <path d="M14.5 12 8 15.5 1.5 12V4L8 .5 14.5 4z" />
    </g>
  </svg>
);
export default SvgRubyGem;
