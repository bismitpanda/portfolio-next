import type { SVGProps } from "react";
import * as React from "react";

const SvgNpmLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
        stroke="#7f849c"
      />
      <path d="M9.5 9V5.5h-2v6h-4v-8h8v3" stroke="#cdd6f4" />
      <path
        d="M7.54 13.5H3A1.5 1.5 0 0 1 1.5 12V3c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3.5"
        stroke="#f38ba8"
      />
    </g>
  </svg>
);
export default SvgNpmLock;
