import type { SVGProps } from "react";
import * as React from "react";

const SvgSemanticRelease = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 11.5v-7L8 .5l6.5 4v7l-6.5 4zm6.5-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1.75 7Q2.5 8.5 4 8.5m0 4.41c1.13.07 1.93-.33 2.43-1.2m3.83 2.2c.62-.93.67-1.83.17-2.7M14.25 9Q13.5 7.5 12 7.5m0-4.41c-1.13-.07-1.93.33-2.43 1.2m-3.83-2.2c-.62.93-.67 1.83-.17 2.7"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSemanticRelease;
