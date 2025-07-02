import type { SVGProps } from "react";
import * as React from "react";

const SvgGitlab = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 14.49 14.5 10 12 2l-1.5 4.5h-5L4 2l-2.5 8z"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGitlab;
