import type { SVGProps } from "react";
import * as React from "react";

const SvgNativescript = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 10.75q0 .75.75.75H6.5V8l3 3.5h1.25q.75 0 .75-.75v-1.5c0-.5.42-.92 1.25-1.25-.83-.33-1.25-.75-1.25-1.25v-1.5q0-.75-.75-.75H9.5V8l-3-3.5H5.25q-.75 0-.75.75v1.5c0 .5-.42.92-1.25 1.25.83.33 1.25.75 1.25 1.25zM4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgNativescript;
