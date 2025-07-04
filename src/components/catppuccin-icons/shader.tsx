import type { SVGProps } from "react";
import * as React from "react";

const SvgShader = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.41 12c0 .9-.47 1.72-1.23 2.17-.76.44-1.7.44-2.45 0A2.5 2.5 0 0 1 1.5 12c0-1.38 1.1-2.5 2.46-2.5A2.48 2.48 0 0 1 6.4 12h0Zm3.78-7.23A2.85 2.85 0 0 0 4.6 3.6a2.9 2.9 0 0 0 1.77 3.5c2.19.88 2.7 1.75 2.43 4.13a2.85 2.85 0 0 0 5.58 1.17 2.9 2.9 0 0 0-1.77-3.5c-2.19-.88-2.7-1.76-2.43-4.13h0Z"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgShader;
