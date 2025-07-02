import type { SVGProps } from "react";
import * as React from "react";

const SvgYaml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.5 1.5h3l3 4 3-4h3l-9 13h-3L7 8z"
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgYaml;
