import type { SVGProps } from "react";
import * as React from "react";

const SvgModernizr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 14.5h12v-12h-4v4h-4v4h-4zm8 0v-8m-4 8v-4"
    />
  </svg>
);
export default SvgModernizr;
