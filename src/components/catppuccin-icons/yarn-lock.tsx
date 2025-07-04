import type { SVGProps } from "react";
import * as React from "react";

const SvgYarnLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7.179}
    >
      <path
        d="M58.19 92.889c-2.438 1.472-16.058 7.342-33.033.927 0 0-15.323 4.247-14.195-6.503 0 0-10.684-12.422.938-22.28 0 0-1.241-16.91 11.549-24.936 0 0-8.286-12.228 0-19.036s12.645-9.145 18.736-8.634c0 0 7.247-20.251 14.643 0 0 0 9.061-7.776 7.844 17.247-.323 6.646-4.717 16.289-7.844 20.326 0 0 2.22 1.58 4.44 5.612 1.11 2.015 2.22 4.643 3.053 7.992a45 45 0 0 1 1.006 5.578"
        transform="matrix(.13927 0 0 .13933 -.413 .02)"
      />
      <path
        d="M27.469 94.285c-1.525-1.407.321-8.703.321-8.703s-1.252 4.723-3.116 7.525"
        transform="matrix(.13927 0 0 .13933 -.413 .02)"
      />
    </g>
  </svg>
);
export default SvgYarnLock;
