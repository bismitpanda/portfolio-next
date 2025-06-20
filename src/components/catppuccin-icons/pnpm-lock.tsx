import * as React from "react";
import type { SVGProps } from "react";

const SvgPnpmLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#7f849c"
        d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
      />
      <path stroke="#fab387" d="M4.5 1.5v3" />
      <path stroke="#cdd6f4" d="M7.5 7.5v3m-3-6v6" />
      <path stroke="#fab387" d="M7.5 1.5v6m3 0v-6h-9v3h9" />
      <path stroke="#cdd6f4" d="M10.5 7.5h-9v3h7" />
    </g>
  </svg>
);
export default SvgPnpmLock;
