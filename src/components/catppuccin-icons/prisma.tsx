import * as React from "react";
import type { SVGProps } from "react";

const SvgPrisma = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 .5 6.5 12.05-10 2.95-3-5zm-3.5 15L8 .5"
    />
  </svg>
);
export default SvgPrisma;
