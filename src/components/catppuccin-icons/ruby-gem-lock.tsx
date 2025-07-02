import type { SVGProps } from "react";
import * as React from "react";

const SvgRubyGemLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 10.5 3.5-4-1.5-2H4l-1.5 2z" stroke="#f38ba8" />
      <path d="M7.5 12.68 6 13.5l-5.5-3v-7L6 .5l5.5 3v3" stroke="#f38ba8" />
      <path
        d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
        stroke="#7f849c"
      />
    </g>
  </svg>
);
export default SvgRubyGemLock;
