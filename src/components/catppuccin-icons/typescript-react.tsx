import type { SVGProps } from "react";
import * as React from "react";

const SvgTypescriptReact = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#89b4fa" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 11.3c4.14 0 7.5-1.28 7.5-2.86S12.14 5.58 8 5.58.5 6.86.5 8.44s3.36 2.87 7.5 2.87Z" />
      <path d="M5.52 9.87c2.07 3.6 4.86 5.86 6.23 5.07 1.37-.8.8-4.34-1.27-7.93S5.62 1.16 4.25 1.95s-.8 4.34 1.27 7.92" />
      <path d="M5.52 7.01c-2.07 3.59-2.64 7.14-1.27 7.93s4.16-1.48 6.23-5.07c2.07-3.58 2.64-7.13 1.27-7.92-1.37-.8-4.16 1.47-6.23 5.06" />
      <path d="M8.5 8.44a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5" />
    </g>
  </svg>
);
export default SvgTypescriptReact;
