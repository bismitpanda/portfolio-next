import type { SVGProps } from "react";
import * as React from "react";

const SvgJavaAnnotation = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.5 8v1c0 .67.4 1.21.97 1.55.58.34 1.53.34 2.1 0 .58-.34.94-.95.93-1.62V8a6.5 6.5 0 1 0-2.79 5.33M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJavaAnnotation;
