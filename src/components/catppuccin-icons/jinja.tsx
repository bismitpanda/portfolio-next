import * as React from "react";
import type { SVGProps } from "react";

const SvgJinja = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 1.5c3.78 1.03 8.02 1.54 13 0L13 5c-3.5.75-6.5.75-10 0zm0 6.09C6 8.75 10 8.75 14.5 7.5m-9-1.52v8.52m-3 0h4m3 0h4m-3-8.52v8.52M3.5 8v6.5m9-6.5v6.5"
    />
  </svg>
);
export default SvgJinja;
