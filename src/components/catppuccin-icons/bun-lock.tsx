import * as React from "react";
import type { SVGProps } from "react";

const SvgBunLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#7f849c"
        d="M15 11.51c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.27.22-.5.5-.5zm-4 0v-1.5a1.5 1.5 0 1 1 3 0v1.5"
      />
      <path
        stroke="#f5e0dc"
        d="M14.5 7.01c0-3.69-4.2-5.57-7-6.5-2.8.93-7 2.81-7 6.5 0 4.85 5.13 5.5 7 5.5"
      />
      <path stroke="#eba0ac" d="M5.5 8.51h4c-.67.67-1.33 1-2 1s-1.33-.33-2-1" />
      <path
        stroke="#cdd6f4"
        d="M5 6.51a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      />
    </g>
  </svg>
);
export default SvgBunLock;
