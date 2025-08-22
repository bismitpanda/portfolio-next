import type { SVGProps } from "react";
import * as React from "react";

const SvgGitCliff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.143 10.585s3.16-2.431 3.58-2.851.906-.884 1.702-.133C8.22 8.353 8.86 8.95 8.86 8.95s.707-.154 1.348.265c.64.42 2.983 1.812 2.983 1.812"
    />
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.95 8.922s-.973.248-1.26.425-.862.243-1.083.221m4.29.09s2.14 1.59-3.804 4.683"
    />
    <circle
      cx={8}
      cy={8}
      r={6.5}
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGitCliff;
