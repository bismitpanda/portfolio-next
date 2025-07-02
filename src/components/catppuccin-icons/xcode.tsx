import type { SVGProps } from "react";
import * as React from "react";

const SvgXcode = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.5 8v3.714a2.78 2.78 0 0 1-2.786 2.786H8.5m-4.5 0h-.714A2.78 2.78 0 0 1 .5 11.714V4.286A2.78 2.78 0 0 1 3.286 1.5H6M3.5 12 8 4M6 4l1.477 2.625m2.742 4.875.281.5M3 9.5h2.977"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.884}>
      <path
        d="M14 12 .34 25.703c-1.443 1.447-3.267-.728-1.996-2.003L12 10"
        stroke="#cdd6f4"
        transform="matrix(.50714 -.15926 .15877 .5054 2.596 1.629)"
      />
      <path
        d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5m-.408.569 3.854-4.031"
        stroke="#7f849c"
        transform="matrix(.50714 -.15926 .15877 .5054 2.596 1.629)"
      />
    </g>
  </svg>
);
export default SvgXcode;
