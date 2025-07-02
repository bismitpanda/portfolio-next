import type { SVGProps } from "react";
import * as React from "react";

const SvgStata = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      fill="none"
      height={13}
      rx={0.722}
      ry={0.722}
      stroke="#74c7ec"
      width={13}
      x={1.5}
      y={1.5}
    />
    <path
      d="M3.5 12.5h6v-9h3v6h-9v-3h9v-3h-6v9zv-3"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgStata;
