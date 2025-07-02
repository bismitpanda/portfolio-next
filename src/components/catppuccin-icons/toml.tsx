import type { SVGProps } from "react";
import * as React from "react";

const SvgToml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.5 1.5h-2v13h2m9-13h2v13h-2m-8-11h7v3h-2v6h-3v-6h-2z"
      fill="none"
      stroke="#eba0ac"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgToml;
