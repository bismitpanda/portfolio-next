import type { SVGProps } from "react";
import * as React from "react";

const SvgNunjucks = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14 14.5h-4c-.75 0-1-.25-1-1v-3l2-.5v2.5h2v-8h2v9c0 .75-.25 1-1 1m-13 0v-13h1.5l2.5 6v-6h2v13H5.5L3 8.5v6z"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgNunjucks;
