import type { SVGProps } from "react";
import * as React from "react";

const SvgJava = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M10.73 8.41c.57 3 1.59 5.83 2.77 7.09-6.63-3.45-9.76-1.75-10.5 0-.66-3.4-.54-5.74.09-7.78"
        stroke="#cdd6f4"
      />
      <path
        d="M8.5 7c.63.34 1.82 1.07 2.24 1.41-.54-2.9-.64-5.96-.74-7.91-2.13.58-5.73 1.98-6.9 7.22.52-.69 1.72-1.05 2.4-1.22"
        stroke="#f38ba8"
      />
      <path
        d="M5.5 7A1.5 1.5 0 0 0 7 8.5 1.5 1.5 0 0 0 8.5 7 1.5 1.5 0 0 0 7 5.5 1.5 1.5 0 0 0 5.5 7"
        stroke="#f38ba8"
      />
    </g>
  </svg>
);
export default SvgJava;
