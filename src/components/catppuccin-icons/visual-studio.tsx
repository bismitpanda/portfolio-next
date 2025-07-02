import type { SVGProps } from "react";
import * as React from "react";

const SvgVisualStudio = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.5 11 3 4.5h-.5l-1 1V6l9 8.5 4-2v-9l-4-2v13m0-13L5.3 6.41M3.53 8.08 1.5 10v.5l.98 1.1.52-.1 2.17-1.88m1.91-1.66L10.5 5"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVisualStudio;
