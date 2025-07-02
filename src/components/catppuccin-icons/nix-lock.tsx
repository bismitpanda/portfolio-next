import type { SVGProps } from "react";
import * as React from "react";

const SvgNixLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M.5 7.5H4m1.39-2L2.05 11" stroke="#74c7ec" />
      <path d="M4 1.5 5.5 4m3.5.5H2.55" stroke="#89b4fa" />
      <path d="m12 1.5-1.5 3m1.01 2.6L8.5 1.5" stroke="#74c7ec" />
      <path d="m12.733 7.063.422-.688L14 5" stroke="#89b4fa" />
      <path d="m7.03 11.52.81-.002" stroke="#74c7ec" />
      <path d="m4 14.5 1.5-3M4.53 9l2.97 5.5" stroke="#89b4fa" />
    </g>
    <path
      d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
      fill="none"
      stroke="#7f849c"
    />
  </svg>
);
export default SvgNixLock;
