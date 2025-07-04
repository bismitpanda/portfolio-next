import type { SVGProps } from "react";
import * as React from "react";

const SvgMsPowerpoint = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#fab387" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 3.13c0-.77.86-1.63 1.62-1.63h9.76c.76 0 1.62.86 1.62 1.63v9.75c0 .76-.86 1.62-1.62 1.62H4.13c-.77 0-1.63-.86-1.63-1.62" />
      <path d="M7.5 5.8 11.88 8 7.5 10.2zm-7-.3v5m0-2H2a1.5 1.5 0 0 0 0-3H.5" />
    </g>
  </svg>
);
export default SvgMsPowerpoint;
