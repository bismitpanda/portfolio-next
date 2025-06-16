import * as React from "react";
import type { SVGProps } from "react";

const SvgYaml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 1.5h3l3 4 3-4h3l-9 13h-3L7 8z"
    />
  </svg>
);
export default SvgYaml;
