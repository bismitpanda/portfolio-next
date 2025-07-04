import type { SVGProps } from "react";
import * as React from "react";

const SvgLisp = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M.5 5.06v6.07C.5 12.41.82 13 2.27 13h5.6c1.04 0 1.63-.51 1.63-1.62 0-.85-.2-1.88-1.5-1.88h-.36C6.4 9.5 6 8.77 6 7.75 6 6.81 6.8 6 7.49 6h2.68" />
      <path d="M3.5 10.5V4.99C3.5 3.89 3.62 3 5 3h9c.97 0 1.5.99 1.5 1.63.12 1.55-.98 1.62-2.1 2.16-.58.26-1.4.52-1.4.98V11" />
    </g>
  </svg>
);
export default SvgLisp;
