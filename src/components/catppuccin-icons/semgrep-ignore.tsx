import type { SVGProps } from "react";
import * as React from "react";

const SvgSemgrepIgnore = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSemgrepIgnore;
