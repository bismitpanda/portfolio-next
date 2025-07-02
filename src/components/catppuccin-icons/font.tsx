import type { SVGProps } from "react";
import * as React from "react";

const SvgFont = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m7 5 4 8.5h2.5L8 2.5l-4.5 11m-1 0h2m5 0h5m-9-4H9"
      fill="none"
      stroke="#f2cdcd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFont;
