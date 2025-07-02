import type { SVGProps } from "react";
import * as React from "react";

const SvgAssembly = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      fill="none"
      height={13.001}
      rx={2.286}
      ry={2.286}
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={8}
      x={4}
      y={1.499}
    />
    <path
      d="M4 4.5H1.5M4 8H1.5M4 11.5H1.5m13-7H12M14.5 8H12m2.5 3.5H12"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAssembly;
