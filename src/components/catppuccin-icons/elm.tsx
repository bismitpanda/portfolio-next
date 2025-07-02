import type { SVGProps } from "react";
import * as React from "react";

const SvgElm = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 1.5h10c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 13V3c0-.83.67-1.5 1.5-1.5M2 2l12 12M8.5 1.5l6 6M11 11l3.5-3.5m-10-3h6.25M2 14l9-9"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgElm;
