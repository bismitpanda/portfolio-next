import type { SVGProps } from "react";
import * as React from "react";

const SvgGitCliff = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.143 10.585s3.16-2.431 3.58-2.851.906-.884 1.702-.133C8.22 8.353 8.86 8.95 8.86 8.95s.707-.154 1.348.265c.64.42 2.983 1.812 2.983 1.812"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.95 8.922s-.973.248-1.26.425-.862.243-1.083.221m4.29.09s2.14 1.59-3.804 4.683"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={8}
      cy={8}
      fill="none"
      r={6.5}
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGitCliff;
