import type { SVGProps } from "react";
import * as React from "react";

const SvgAzurePipelines = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 12v2.5H4m2.5-9 2-4h6v6l-4 3v4h-4L6 14l1.5-1.5L6 11l-1.5 1.5-1-1L5 10 3.5 8.5 2 10l-.5-.5v-4zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="none"
      stroke="#b4befe"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAzurePipelines;
