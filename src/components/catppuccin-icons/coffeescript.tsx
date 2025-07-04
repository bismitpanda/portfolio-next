import type { SVGProps } from "react";
import * as React from "react";

const SvgCoffeescript = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#fab387" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 7c-.5 2.5-2 5.5-3 6.5s-2 1-3 1-2 0-3.02-1C4.45 12.5 3 9.5 2.5 7c3 2 9 2 12 0m-12-2c3 2 9 2 12 0" />
      <path d="M2.5 8.4c-1.73 1.6-1.26 4.17 2 4.1M7 2c-.75-.36-1.5.18-1.5.74-.01.56.94.78 1.5.75.6-.03.97-.7 1.5-.96C8.98 2.3 9.41 2 10 2c.56 0 1.52.25 1.5 1-.01.61-1.12.8-1.5.49" />
    </g>
  </svg>
);
export default SvgCoffeescript;
