import type { SVGProps } from "react";
import * as React from "react";

const SvgDrizzleOrm = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m12.001 9.002 2-4.002M8 12.002 10 8M5.998 9l2-4.001m-6.001 7.002 2-4.002"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.167}
    />
  </svg>
);
export default SvgDrizzleOrm;
