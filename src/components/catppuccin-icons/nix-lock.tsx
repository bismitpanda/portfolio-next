import type { SVGProps } from "react";
import * as React from "react";

const SvgNixLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#74c7ec" d="M.5 7.5H4m1.39-2L2.05 11" />
      <path stroke="#89b4fa" d="M4 1.5 5.5 4m3.5.5H2.55" />
      <path stroke="#74c7ec" d="m12 1.5-1.5 3m1.01 2.6L8.5 1.5" />
      <path stroke="#89b4fa" d="m12.733 7.063.422-.688L14 5" />
      <path stroke="#74c7ec" d="m7.03 11.52.81-.002" />
      <path stroke="#89b4fa" d="m4 14.5 1.5-3M4.53 9l2.97 5.5" />
    </g>
    <path
      fill="none"
      stroke="#7f849c"
      d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
    />
  </svg>
);
export default SvgNixLock;
