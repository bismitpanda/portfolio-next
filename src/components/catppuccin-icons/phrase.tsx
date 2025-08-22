import type { SVGProps } from "react";
import * as React from "react";

const SvgPhrase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M3.5 1.5H10c1.385 0 2.5 1.115 2.5 2.5v5c0 1.385-1.115 2.5-2.5 2.5H9"
      />
      <path stroke="#94e2d5" d="M3.5 1.5v10l4 3v-10z" />
    </g>
  </svg>
);
export default SvgPhrase;
