import type { SVGProps } from "react";
import * as React from "react";

const SvgMsWord = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#89b4fa" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 3.13c0-.77.86-1.63 1.62-1.63h9.76c.76 0 1.62.86 1.62 1.63v9.75c0 .76-.86 1.62-1.62 1.62H4.13c-.77 0-1.63-.86-1.63-1.62" />
      <path d="m.5 5.5 1 5 1-5 1 5 .97-5m3.03 1h4m-4 3h4" />
    </g>
  </svg>
);
export default SvgMsWord;
