import * as React from "react";
import type { SVGProps } from "react";

const SvgTerraform = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1.5 6 8 4.25 4-2.25m-12-2V1.5l8 4.25 4-2.25V8m-4-2.25v8.75M5.53 3.82 5.5 12.5l4 2"
    />
  </svg>
);
export default SvgTerraform;
