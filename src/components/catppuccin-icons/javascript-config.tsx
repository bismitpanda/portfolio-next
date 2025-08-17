import type { SVGProps } from "react";
import * as React from "react";

const SvgJavascriptConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M9.5 5c-.33-.33-.83-.5-1.5-.5-1 0-1.5.5-1.5 1s.5 1 1.5 1 1.5.5 1.5 1-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5m-2-3.5v3a1 1 0 1 1-2 0"
        stroke="#f9e2af"
      />
      <path
        d="M6.5 11.5h-4a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2V7"
        stroke="#f9e2af"
      />
      <path
        d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.75-4 1.75 3-1.75 3h-3.5L8 12.5l1.75-3z"
        stroke="#7f849c"
      />
    </g>
  </svg>
);
export default SvgJavascriptConfig;
