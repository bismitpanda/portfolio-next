import type { SVGProps } from "react";
import * as React from "react";

const SvgChangelog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.71 10.96a6.5 6.5 0 1 0-.69-3.53M2 8l1.5-1.5M2 8 .5 6.5m8 2v-4m0 4h3"
    />
  </svg>
);
export default SvgChangelog;
