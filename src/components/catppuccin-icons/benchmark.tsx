import * as React from "react";
import type { SVGProps } from "react";

const SvgBenchmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.562 13.625c.636-1.1.938-2.387.938-3.75a7.5 7.5 0 1 0-13.997 3.75m5.56 0 3.75-4.688"
    />
  </svg>
);
export default SvgBenchmark;
