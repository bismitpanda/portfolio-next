import type { SVGProps } from "react";
import * as React from "react";

const SvgVerilog = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cdd6f4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 2.5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2" />
      <path d="M5.5 5.5h5v5h-5zm8.5 0h1.5M14 8h1.5M14 10.5h1.5M.5 5H2M.5 7.5H2M.5 10H2m3.5-8V.5M8 2V.5M10.5 2V.5m-5 15V14M8 15.5V14m2.5 1.5V14" />
    </g>
  </svg>
);
export default SvgVerilog;
