import type { SVGProps } from "react";
import * as React from "react";

const SvgPrisma = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m8 .5 6.5 12.05-10 2.95-3-5zm-3.5 15L8 .5"
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPrisma;
