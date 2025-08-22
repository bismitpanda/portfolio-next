import type { SVGProps } from "react";
import * as React from "react";

const SvgFont = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f2cdcd"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 5 4 8.5h2.5L8 2.5l-4.5 11m-1 0h2m5 0h5m-9-4H9"
    />
  </svg>
);
export default SvgFont;
