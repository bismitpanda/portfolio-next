import type { SVGProps } from "react";
import * as React from "react";

const SvgWindi = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 5.5H6a2 2 0 1 0-2-2m-2.5 5H12A2.5 2.5 0 1 0 9.5 6m-2 7A1.5 1.5 0 1 0 9 11.5H5.5m-4 0h2"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgWindi;
