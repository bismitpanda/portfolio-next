import type { SVGProps } from "react";
import * as React from "react";

const SvgUv = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1 1h5.8v9.1h2.8V1H15v14h-2v-1.4h-1.5c-.2.8-.9 1.4-1.8 1.4H3.2C1.9 15 1 14 1 12.9z"
      fill="none"
      stroke="#f5c2e7"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgUv;
