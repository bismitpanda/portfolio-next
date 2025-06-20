import * as React from "react";
import type { SVGProps } from "react";

const SvgToml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#eba0ac"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 1.5h-2v13h2m9-13h2v13h-2m-8-11h7v3h-2v6h-3v-6h-2z"
    />
  </svg>
);
export default SvgToml;
