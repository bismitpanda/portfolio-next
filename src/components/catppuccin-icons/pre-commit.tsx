import type { SVGProps } from "react";
import * as React from "react";

const SvgPreCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      fill="none"
      height={9.801}
      rx={1.032}
      ry={1.032}
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(-45)"
      width={9.801}
      x={-4.901}
      y={6.413}
    />
    <path
      d="M6.569 10.628V5.43h2.619s1.076.157 1.076 1.38c0 1.224-1.076 1.462-1.076 1.462H6.663"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPreCommit;
