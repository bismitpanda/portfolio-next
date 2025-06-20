import * as React from "react";
import type { SVGProps } from "react";

const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#f9e2af"
        d="M11.5 6A1.5 1.5 0 0 1 10 7.5 1.5 1.5 0 0 1 8.5 6 1.5 1.5 0 0 1 10 4.5 1.5 1.5 0 0 1 11.5 6"
      />
      <path stroke="#a6e3a1" d="M7.5 13.5 11 10c.5-.5 1.5-.5 2 0l1.5 1.5" />
      <path stroke="#a6e3a1" d="m1.5 9.5 2-2C4 7 5 7 5.5 7.5l4 4" />
      <path
        stroke="#74c7ec"
        d="M3 2.5h10c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 12V4c0-.83.67-1.5 1.5-1.5"
      />
    </g>
  </svg>
);
export default SvgImage;
