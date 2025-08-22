import type { SVGProps } from "react";
import * as React from "react";

const SvgJust = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <circle
      cx={8}
      cy={8}
      r={6.5}
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={8}
      cy={5}
      r={1.5}
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={8}
      cy={11}
      r={1.5}
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJust;
