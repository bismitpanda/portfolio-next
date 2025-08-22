import type { SVGProps } from "react";
import * as React from "react";

const SvgScheme = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.933 15.5 8 7.063m6.067 8.437c-5.6 0-5.6-15-11.2-15"
    />
  </svg>
);
export default SvgScheme;
