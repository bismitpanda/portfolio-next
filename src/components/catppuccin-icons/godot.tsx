import type { SVGProps } from "react";
import * as React from "react";

const SvgGodot = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m1.5 11 2.5.5.25 1h2l.5-1h2.5l.5 1h2l.25-1 2.5-.5m-13 1.25c0 2.25 2.74 3.25 6.5 3.25 3.75 0 6.5-1 6.5-3.25v-5L15.75 6 14.5 4 13 5.25 11.5 4l.5-1.5-2.5-1L8.75 3h-1.5L6.5 1.5 4 2.5 4.5 4 3 5.25 1.5 4 .25 6 1.5 7.25zM8 7.5v2m-3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGodot;
