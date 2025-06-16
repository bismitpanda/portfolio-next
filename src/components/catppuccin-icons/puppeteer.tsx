import * as React from "react";
import type { SVGProps } from "react";

const SvgPuppeteer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 2 .5 6M4 2l-.5 6"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h10M4 8h8c.554 0 1 .446 1 1v5.5c0 .554-.446 1-1 1H4c-.554 0-1-.446-1-1V9c0-.554.446-1 1-1"
    />
    <path
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 3 3 4.5V5l1.5.5L8 4l3.5 1.5L13 5v-.5L9.5 3 13 1.5V1L11.5.5 8 2 4.5.5 3 1v.5Z"
    />
  </svg>
);
export default SvgPuppeteer;
