import * as React from "react";
import type { SVGProps } from "react";

const SvgRubyGem = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 12.5 4.5-5-2-2h-5l-2 2z" />
      <path d="M14.5 12 8 15.5 1.5 12V4L8 .5 14.5 4z" />
    </g>
  </svg>
);
export default SvgRubyGem;
