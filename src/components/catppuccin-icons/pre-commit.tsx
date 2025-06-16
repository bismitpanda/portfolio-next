import * as React from "react";
import type { SVGProps } from "react";

const SvgPreCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <rect
      width={9.801}
      height={9.801}
      x={-4.901}
      y={6.413}
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={1.032}
      ry={1.032}
      transform="rotate(-45)"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.569 10.628V5.43h2.619s1.076.157 1.076 1.38c0 1.224-1.076 1.462-1.076 1.462H6.663"
    />
  </svg>
);
export default SvgPreCommit;
