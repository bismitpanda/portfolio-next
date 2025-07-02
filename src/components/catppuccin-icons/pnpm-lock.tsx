import type { SVGProps } from "react";
import * as React from "react";

const SvgPnpmLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
        stroke="#7f849c"
      />
      <path d="M4.5 1.5v3" stroke="#fab387" />
      <path d="M7.5 7.5v3m-3-6v6" stroke="#cdd6f4" />
      <path d="M7.5 1.5v6m3 0v-6h-9v3h9" stroke="#fab387" />
      <path d="M10.5 7.5h-9v3h7" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgPnpmLock;
