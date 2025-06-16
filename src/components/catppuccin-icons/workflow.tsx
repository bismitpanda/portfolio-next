import * as React from "react";
import type { SVGProps } from "react";

const SvgWorkflow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 1.5h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2m7 7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2m-6-1V10q0 1.5 1.5 1.5h2.5"
    />
  </svg>
);
export default SvgWorkflow;
