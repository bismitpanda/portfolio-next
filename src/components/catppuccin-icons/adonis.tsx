import type { SVGProps } from "react";
import * as React from "react";

const SvgAdonis = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#b4befe" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5c5.2 0 6.5 1.3 6.5 6.5s-1.3 6.5-6.5 6.5S1.5 13.2 1.5 8 2.8 1.5 8 1.5" />
      <path d="M8 10.89c1.08 0 1.44.36 2.27.66a1 1 0 0 0 1.28-.55.87.87 0 0 0-.03-.71l-2.68-5.4a.96.96 0 0 0-1.68 0l-2.68 5.4c-.23.47-.01 1.02.5 1.24.23.1.5.12.75.02.83-.3 1.19-.66 2.27-.66" />
    </g>
  </svg>
);
export default SvgAdonis;
