import type { SVGProps } from "react";
import * as React from "react";

const SvgFastlane = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 13.5 3.05 8.42m-.06-3.86a2 2 0 1 0 .06 3.86L4.5 13.5"
        stroke="#74c7ec"
      />
      <path d="m2.5 6.5 3.88-2.82A2 2 0 1 1 10 2.3" stroke="#f38ba8" />
      <path d="M14.3 8.33a2 2 0 1 0-2.43-3L8.01 2.5" stroke="#89b4fa" />
      <path d="M10.06 14.89a2 2 0 1 0 2-3.3L13.5 6.5" stroke="#a6e3a1" />
      <path d="M11.5 13.5h-5a2 2 0 1 1-3.73-1" stroke="#cba6f7" />
      <path
        d="M12 13.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        stroke="#cba6f7"
      />
      <path
        d="M5 13.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        stroke="#74c7ec"
      />
      <path
        d="M3 6.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        stroke="#f38ba8"
      />
      <path
        d="M8.5 2.5A.5.5 0 0 1 8 3a.5.5 0 0 1-.5-.5A.5.5 0 0 1 8 2a.5.5 0 0 1 .5.5"
        stroke="#89b4fa"
      />
      <path
        d="M14 6.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        stroke="#a6e3a1"
      />
    </g>
  </svg>
);
export default SvgFastlane;
