import type { SVGProps } from "react";
import * as React from "react";

const SvgVhs = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2 3.5c-.828 0-1.5.743-1.5 1.556v5.888c0 .813.672 1.556 1.5 1.556h12c.828 0 1.5-.743 1.5-1.556V5.056c0-.813-.672-1.556-1.5-1.556Zm.405 3H4v3H2.405A3 3 0 0 1 2 8c0-.515.142-1.051.405-1.5M6 6.5h4v3H6Zm6 0h1.595c.262.449.405.985.405 1.5s-.143 1.051-.405 1.5H12Z"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVhs;
