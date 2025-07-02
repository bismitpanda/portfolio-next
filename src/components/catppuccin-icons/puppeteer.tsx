import type { SVGProps } from "react";
import * as React from "react";

const SvgPuppeteer = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m12 2 .5 6M4 2l-.5 6"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 10h10M4 8h8c.554 0 1 .446 1 1v5.5c0 .554-.446 1-1 1H4c-.554 0-1-.446-1-1V9c0-.554.446-1 1-1"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 3 3 4.5V5l1.5.5L8 4l3.5 1.5L13 5v-.5L9.5 3 13 1.5V1L11.5.5 8 2 4.5.5 3 1v.5Z"
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPuppeteer;
