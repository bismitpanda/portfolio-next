import type { SVGProps } from "react";
import * as React from "react";

const SvgNpmIgnore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.45 1.5a.95.95 0 0 0-.95.95v11.1a.95.95 0 0 0 .95.95h11.1a.95.95 0 0 0 .95-.95V2.45a.95.95 0 0 0-.95-.95z" />
      <path d="M4.5 4.5h7v7h-2v-5h-2v5h-3z" />
    </g>
  </svg>
);
export default SvgNpmIgnore;
