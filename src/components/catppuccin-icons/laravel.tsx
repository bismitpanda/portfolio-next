import type { SVGProps } from "react";
import * as React from "react";

const SvgLaravel = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.51 5.49v3.29M9.64 3.89l2.86 1.6 2.74-1.53M6.5 12v3.5m-3-12 3-1.5" />
      <path d="m3.5 10.5 6-3.5V3.5L12.51 2l2.99 1.5V7l-3.06 1.5L9.5 7" />
      <path d="m.5 2 3-1.5 3 1.5v6.5" />
      <path d="M.5 2v10.17l6 3.33 6.02-3.41V8.5L6.5 12.04l-3-1.54v-7z" />
    </g>
  </svg>
);
export default SvgLaravel;
