import * as React from "react";
import type { SVGProps } from "react";

const SvgLatte = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round">
      <path
        stroke="#f9e2af"
        d="M10.2 4s-1.3-.7-2.5-.7c-1.3 0-1.9.7-1.9 2 0 1.4 2.5 2 2.5 2s1.9.7 1.9 2c0 1.4-.6 2-1.9 2-1.2 0-2.5-.6-2.5-.6M8.3 2v11.3"
      />
      <path
        stroke="#fab387"
        d="M4 2s-.7 0-1.3.7C2 3.3 2 6 2 6.7 2 7.3.8 7.3.8 8s1.3.7 1.3 1.3c0 .7 0 3.4.6 4 .6.7 1.2.7 1.2.7m8.1 0s.7 0 1.3-.7c.6-.6.6-3.3.6-4 0-.6 1.3-.6 1.3-1.3s-1.3-.7-1.3-1.3c0-.7 0-3.4-.6-4-.6-.7-1.2-.7-1.2-.7"
      />
    </g>
  </svg>
);
export default SvgLatte;
