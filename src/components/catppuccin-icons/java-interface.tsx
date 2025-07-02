import type { SVGProps } from "react";
import * as React from "react";

const SvgJavaInterface = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 9.604H8v3.21h3.25v-3.21h3.25V6.396H8v-3.21H4.75v3.21H1.5Z"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.75 9.604V6.396H8v3.208h3.25V6.396"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJavaInterface;
