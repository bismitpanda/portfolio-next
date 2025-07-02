import type { SVGProps } from "react";
import * as React from "react";

const SvgApiBlueprint = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.5 12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-4.5-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6.5 7 3-5.5m3 0 3 5.5"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgApiBlueprint;
