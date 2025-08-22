import type { SVGProps } from "react";
import * as React from "react";

const SvgRproj = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.79}
      d="M5.651 10.337V4.801h2.06c.642 0 1.317.692 1.317 1.384S8.353 7.57 7.711 7.57h-2.06Zm2.026-2.768c.27 0 .581.235.676.485l.675 2.283h.85"
      transform="matrix(1.26652 0 0 1.26466 -1.313 -1.572)"
    />
    <circle
      cx={8}
      cy={8}
      r={7.5}
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.958 11.5H4.802m1.96-7h-1.96"
    />
  </svg>
);
export default SvgRproj;
