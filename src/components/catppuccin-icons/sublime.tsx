import type { SVGProps } from "react";
import * as React from "react";

const SvgSublime = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m13.5 11.5-11 3v-3l6.29-1.71M2.5 4.5l11-3v3L7.21 6.21m6.29 5.29v-3l-11-4v3z"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSublime;
