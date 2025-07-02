import type { SVGProps } from "react";
import * as React from "react";

const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M11.5 6A1.5 1.5 0 0 1 10 7.5 1.5 1.5 0 0 1 8.5 6 1.5 1.5 0 0 1 10 4.5 1.5 1.5 0 0 1 11.5 6"
        stroke="#f9e2af"
      />
      <path d="M7.5 13.5 11 10c.5-.5 1.5-.5 2 0l1.5 1.5" stroke="#a6e3a1" />
      <path d="m1.5 9.5 2-2C4 7 5 7 5.5 7.5l4 4" stroke="#a6e3a1" />
      <path
        d="M3 2.5h10c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 12V4c0-.83.67-1.5 1.5-1.5"
        stroke="#74c7ec"
      />
    </g>
  </svg>
);
export default SvgImage;
