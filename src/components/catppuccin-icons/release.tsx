import * as React from "react";
import type { SVGProps } from "react";

const SvgRelease = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.047 5.892C2.637 5.334 1.5 8.682 1.5 8.682l2.842.557m5.928.798c.568 3.347-2.842 4.463-2.842 4.463l-.568-2.79"
    />
    <path
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.888 7.008a1.607 1.578 0 1 1 2.274-2.231 1.607 1.578 0 0 1-2.274 2.23"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.637 10.913c-1.137 1.115-.569 2.789-.569 2.789s1.705.558 2.842-.558"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.535 8.94-4.92 2.53-2.273-2.23 2.577-4.83a4.82 4.82 0 0 1 3.684-2.502l3.356-.405a.478.478 0 0 1 .538.528l-.413 3.294a4.74 4.74 0 0 1-2.549 3.616"
    />
  </svg>
);
export default SvgRelease;
