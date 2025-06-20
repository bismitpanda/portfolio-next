import * as React from "react";
import type { SVGProps } from "react";

const SvgJavaJar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M10.73 8.41c.57 3 1.59 5.83 2.77 7.09-6.63-3.45-9.76-1.75-10.5 0-.66-3.4-.54-5.74.09-7.78"
      />
      <path
        stroke="#7f849c"
        d="M8.5 7c.63.34 1.82 1.07 2.24 1.41-.54-2.9-.64-5.96-.74-7.91-2.13.58-5.73 1.98-6.9 7.22.52-.69 1.72-1.05 2.4-1.22"
      />
      <path
        stroke="#7f849c"
        d="M5.5 7A1.5 1.5 0 0 0 7 8.5 1.5 1.5 0 0 0 8.5 7 1.5 1.5 0 0 0 7 5.5 1.5 1.5 0 0 0 5.5 7"
      />
    </g>
  </svg>
);
export default SvgJavaJar;
