import type { SVGProps } from "react";
import * as React from "react";

const SvgJust = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle
      cx={8}
      cy={8}
      fill="none"
      r={6.5}
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={8}
      cy={5}
      fill="none"
      r={1.5}
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={8}
      cy={11}
      fill="none"
      r={1.5}
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJust;
