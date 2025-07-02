import type { SVGProps } from "react";
import * as React from "react";

const SvgTerraform = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m1.5 6 8 4.25 4-2.25m-12-2V1.5l8 4.25 4-2.25V8m-4-2.25v8.75M5.53 3.82 5.5 12.5l4 2"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgTerraform;
