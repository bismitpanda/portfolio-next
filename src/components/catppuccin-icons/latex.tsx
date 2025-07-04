import type { SVGProps } from "react";
import * as React from "react";

const SvgLatex = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 12.5h1.5m-.5-4-3 4m0-4 3 4m-3.5 0h1m2-4 1.1.01m-4.1-.01h1.42m-4.42 4H9m-1.5-2v4m-.86 0h3.66l.2-.5m-3.75-3.5H10l.5.5M2 13.5h3m-1.5-5v5m-2-3.5.25-1.5h3.5L5.5 10m4-3.5 2-5 2 5m-3-2h2M9 6.5h1m3 0h1m-9.5-5v5m-1-5h2m-2 5H7l.54-.99"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLatex;
