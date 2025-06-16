import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderPreCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <rect
      width={6.034}
      height={6.034}
      x={-3.015}
      y={13.247}
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={0.635}
      ry={0.635}
      transform="rotate(-45.004)"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.62 13.118v-3.2h1.612s.662.096.662.85c0 .753-.662.9-.662.9h-1.555"
    />
  </svg>
);
export default SvgFolderPreCommit;
