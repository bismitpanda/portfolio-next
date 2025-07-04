import type { SVGProps } from "react";
import * as React from "react";

const SvgTypescriptTest = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.5 12c-.33-.33-.83-.5-1.5-.5-1 0-1.5.5-1.5 1s.5 1 1.5 1 1.5.5 1.5 1-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5m-3-3.5v4m-1.5-4h3m-.28-9.75-8.49 8.48a2.5 2.5 0 1 0 3.54 3.54l.77-.77m3.59-3.59.59-.59 1.17-1.18 2.36-2.36M9.5.5l6 6m-3.5 1H4.98"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgTypescriptTest;
