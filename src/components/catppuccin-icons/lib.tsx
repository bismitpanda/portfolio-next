import type { SVGProps } from "react";
import * as React from "react";

const SvgLib = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.5 1.5h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1m4 3h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1m3.48.4 1.93-.52a.5.5 0 0 1 .62.35l2.33 8.7a.5.5 0 0 1-.36.6l-1.93.53a.5.5 0 0 1-.61-.36L9.63 5.5a.5.5 0 0 1 .35-.6"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLib;
