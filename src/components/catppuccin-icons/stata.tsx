import type { SVGProps } from "react";
import * as React from "react";

const SvgStata = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <rect
      width={13}
      height={13}
      x={1.5}
      y={1.5}
      fill="none"
      stroke="#74c7ec"
      rx={0.722}
      ry={0.722}
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 12.5h6v-9h3v6h-9v-3h9v-3h-6v9zv-3"
    />
  </svg>
);
export default SvgStata;
