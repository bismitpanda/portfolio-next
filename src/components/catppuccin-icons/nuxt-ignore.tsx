import type { SVGProps } from "react";
import * as React from "react";

const SvgNuxtIgnore = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.5 12.5h6l-5-7L7.44 11c-.67.98-1.32 1.48-1.94 1.5h-5l5-9 3 5"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgNuxtIgnore;
