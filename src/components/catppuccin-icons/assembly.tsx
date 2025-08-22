import type { SVGProps } from "react";
import * as React from "react";

const SvgAssembly = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <rect
      width={8}
      height={13.001}
      x={4}
      y={1.499}
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={2.286}
      ry={2.286}
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4.5H1.5M4 8H1.5M4 11.5H1.5m13-7H12M14.5 8H12m2.5 3.5H12"
    />
  </svg>
);
export default SvgAssembly;
