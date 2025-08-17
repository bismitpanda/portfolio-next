import type { SVGProps } from "react";
import * as React from "react";

const SvgAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="#eba0ac"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 12.5a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2m9-2a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2" />
      <path d="M5.5 12.5V5c0-.54.44-1.21 1.35-1.5l6.3-2c.9 0 1.35.88 1.35 1.5v7.58m-9-3.08 9-3" />
    </g>
  </svg>
);
export default SvgAudio;
