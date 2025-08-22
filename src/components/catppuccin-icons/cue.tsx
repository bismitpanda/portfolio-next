import type { SVGProps } from "react";
import * as React from "react";

const SvgCue = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#b4befe"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.636 7.04s-.293-.944-1.363-.944-1.635.943-1.635 1.673.335 2.08 1.446 2.08c1.112 0 1.531-.858 1.531-.858M6.9 6.151v2.475s-.084 1.187 1.213 1.222c1.463.04 1.419-1.055 1.419-1.055V6.16m3.674-.01h-2.315v3.7h2.291m-2.146-2.015h1.447"
    />
    <circle
      cx={8}
      cy={8}
      r={7.5}
      fill="none"
      stroke="#b4befe"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCue;
