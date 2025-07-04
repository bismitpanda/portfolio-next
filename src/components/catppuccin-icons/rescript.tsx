import type { SVGProps } from "react";
import * as React from "react";

const SvgRescript = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2" />
      <path d="M5.5 4.55c.83 0 1.5.67 1.5 1.5v4a1.5 1.5 0 1 1-3 0v-4c0-.83.67-1.5 1.5-1.5M12 6a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 9 6a1.5 1.5 0 0 1 1.5-1.5A1.5 1.5 0 0 1 12 6" />
    </g>
  </svg>
);
export default SvgRescript;
