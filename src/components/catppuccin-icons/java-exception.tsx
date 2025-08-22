import type { SVGProps } from "react";
import * as React from "react";

const SvgJavaException = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 2h8L9 7h3l-6 7V9H4z"
    />
  </svg>
);
export default SvgJavaException;
