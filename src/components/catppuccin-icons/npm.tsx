import type { SVGProps } from "react";
import * as React from "react";

const SvgNpm = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M2.45 1.5a.95.95 0 0 0-.95.95v11.1a.95.95 0 0 0 .95.95h11.1a.95.95 0 0 0 .95-.95V2.45a.95.95 0 0 0-.95-.95z"
        stroke="#f38ba8"
      />
      <path d="M4.5 4.5h7v7h-2v-5h-2v5h-3z" stroke="#cdd6f4" />
    </g>
  </svg>
);
export default SvgNpm;
