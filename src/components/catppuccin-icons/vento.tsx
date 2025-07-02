import type { SVGProps } from "react";
import * as React from "react";

const SvgVento = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 1.5h4.469l5.687 13H7.594Z"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.031 1.5H14.5l-2.844 13H7.594Z"
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m8.812 8 2.844 6.5H7.594Z"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVento;
