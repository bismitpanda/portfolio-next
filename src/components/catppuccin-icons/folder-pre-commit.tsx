import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderPreCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      fill="none"
      height={6.034}
      rx={0.635}
      ry={0.635}
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(-45.004)"
      width={6.034}
      x={-3.015}
      y={13.247}
    />
    <path
      d="M10.62 13.118v-3.2h1.612s.662.096.662.85c0 .753-.662.9-.662.9h-1.555"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFolderPreCommit;
