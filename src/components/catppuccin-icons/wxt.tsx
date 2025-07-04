import type { SVGProps } from "react";
import * as React from "react";

const SvgWxt = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 5.45c0-1 .81-1.81 1.81-1.81h1.81v-.33a1.81 1.81 0 0 1 3.62 0v.33h1.81c1 0 1.81.81 1.81 1.81v1.81h.33a1.81 1.81 0 1 1 0 3.62h-.33v1.81c0 1-.81 1.81-1.81 1.81H8.74v-.33a1.81 1.81 0 1 0-3.62 0v.33H1.5v-3.62h.33a1.81 1.81 0 0 0 0-3.62H1.5Z"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgWxt;
