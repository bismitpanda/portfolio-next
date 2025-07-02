import type { SVGProps } from "react";
import * as React from "react";

const SvgAstroConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M8.591 8.591c-.466-.204-.932-.371-1.35-.445l-1.798-4.95-1.797 4.95C2.649 8.32 1.398 9.022.5 9.488l2.843-7.992c.109-.357.163-.536.27-.669A.9.9 0 0 1 3.97.563C4.13.5 4.315.5 4.69.5h1.709c.374 0 .561 0 .72.064a.9.9 0 0 1 .355.263c.107.133.162.312.271.67L9.729 7.5"
        stroke="#cdd6f4"
      />
      <path
        d="M6.561 11.145a5 5 0 0 1-1.003.1c-1.094 0-2.01-.336-2.254-.79-.087.26-.106.558-.106.748 0 0-.058.933.598 1.582 0-.337.276-.61.616-.61.583 0 .582.503.582.912v.037c0 .62.383 1.152.928 1.376a1.24 1.24 0 0 1-.127-.548c0-.592.35-.812.759-1.068"
        stroke="#cba6f7"
      />
      <path
        d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.752-4 1.75 3-1.75 3h-3.5l-1.75-3 1.75-3z"
        stroke="#7f849c"
      />
    </g>
  </svg>
);
export default SvgAstroConfig;
