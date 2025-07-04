import type { SVGProps } from "react";
import * as React from "react";

const SvgXml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 4.5 1 8l3.5 3.5m7-7L15 8l-3.5 3.5M9.5 2l-3 12"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgXml;
