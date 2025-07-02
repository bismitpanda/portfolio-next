import type { SVGProps } from "react";
import * as React from "react";

const SvgEleventy = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.5 5.5 14 13m1.5-7.5L14 13s-.215 1-1 1-.5-.5-.5-.5M8 5.5h2.5M9 2v9s0 1 1 1h.5M.5 3 2 2v10m2-9 1.5-1v10"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEleventy;
