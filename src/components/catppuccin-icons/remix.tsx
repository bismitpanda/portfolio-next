import * as React from "react";
import type { SVGProps } from "react";

const SvgRemix = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 14.5c0-1.67 0-3-2-3h-6v-3h6.63c.97 0 1.37-.67 1.37-1.5s-.32-1.5-1.38-1.5H2.5v-3h8c2.4 0 3 2.33 3 4s-.67 2.5-2 3.5c1.33.66 2 2.17 2 4.5m-11 0H8"
    />
  </svg>
);
export default SvgRemix;
