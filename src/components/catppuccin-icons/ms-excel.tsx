import type { SVGProps } from "react";
import * as React from "react";

const SvgMsExcel = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#a6e3a1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 3.13c0-.77.86-1.63 1.62-1.63h9.76c.76 0 1.62.86 1.62 1.63v9.75c0 .76-.86 1.62-1.62 1.62H4.13c-.77 0-1.63-.86-1.63-1.62M.5 5.5l4 5m0-5-4 5" />
      <path d="M7.5 5.5h5v5h-5zm2 0v5m-2-3h5" />
    </g>
  </svg>
);
export default SvgMsExcel;
