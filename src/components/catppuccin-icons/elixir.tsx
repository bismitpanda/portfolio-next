import type { SVGProps } from "react";
import * as React from "react";

const SvgElixir = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.03 14.5C5 14.5 3.5 12.49 3.5 10.01c0-2.82 2.25-7.02 4.62-8.48a.24.24 0 0 1 .24 0c.08.04.12.12.11.2-.13 1.25.22 2.5.98 3.54.3.43.63.8 1.02 1.27.54.66.94 1.03 1.52 2.08l.01.02c.33.56.5 1.2.5 1.84 0 2.03-1.69 4.02-4.47 4.02"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgElixir;
