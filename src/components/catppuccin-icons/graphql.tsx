import type { SVGProps } from "react";
import * as React from "react";

const SvgGraphql = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 1.5a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m-5.5 3a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m0 7a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m11 0a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m-5.5 3a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m5.5-10a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m-12 1v5m11-5v5m-10 1h9m-6 2.5-3-1.5m6 1.5 3-1.5m-9-2 4-8m5 8-4-8m-5 1 3-1.5m3 0 3 1.5"
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGraphql;
