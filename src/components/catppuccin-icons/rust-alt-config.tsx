import type { SVGProps } from "react";
import * as React from "react";

const SvgRustAltConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.75-4 1.75 3-1.75 3h-3.5L8 12.5l1.75-3z"
    />
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.82 8.998h3.297M2.09 3.899h5.663c1.743 0 1.743 2.549 0 2.55h-3.92m0-2.55v5.099m2.613-2.55h.871c.962 0 1.742.761 1.742 1.7m-2.613 4.25-1.171-.944-1.475.354-.636-1.346-1.486-.305.026-1.481L.5 7.773l.684-1.324L.5 5.125l1.204-.903-.026-1.481 1.486-.305L3.8 1.09l1.475.354L6.445.5l1.172.943 1.475-.354.636 1.346 1.486.305-.026 1.481 1.204.904-.684 1.324.683 1.324"
    />
  </svg>
);
export default SvgRustAltConfig;
