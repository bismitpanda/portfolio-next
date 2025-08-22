import type { SVGProps } from "react";
import * as React from "react";

const SvgJule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14 10.74-6 4.74-6-4.74V5.26L8 .52l6 4.74Z"
    />
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.027 5.31 5.971 5.01 5.971-5.01"
    />
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.062 10.46 5.942-5.185 5.941 5.184M8 .75v4.599m0 4.918v4.598"
    />
  </svg>
);
export default SvgJule;
