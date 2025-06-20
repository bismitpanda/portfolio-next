import * as React from "react";
import type { SVGProps } from "react";

const SvgGitlab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 14.49 14.5 10 12 2l-1.5 4.5h-5L4 2l-2.5 8z"
    />
  </svg>
);
export default SvgGitlab;
