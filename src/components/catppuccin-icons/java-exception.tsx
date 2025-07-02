import type { SVGProps } from "react";
import * as React from "react";

const SvgJavaException = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 2h8L9 7h3l-6 7V9H4z"
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJavaException;
