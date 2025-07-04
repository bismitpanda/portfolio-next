import type { SVGProps } from "react";
import * as React from "react";

const SvgProlog = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 13.5c-.33.33-.5.67-.5 1s.17.67.5 1c.17-.67.5-1 1-1s.83.33 1 1c.33-.33.5-.83.5-1.5h2c0 .67.17 1.17.5 1.5.17-.67.5-1 1-1s.83.33 1 1c.33-.33.5-.67.5-1s-.17-.67-.5-1l1-1 1.25 1.25c0-2.75 1-2.75 1-5.75a7.1 7.1 0 0 0-2-5.25A3.64 3.64 0 0 1 13 .5c-1.17 0-2 .42-2.5 1.25A3.08 3.08 0 0 0 8 .5c-1 0-1.83.42-2.5 1.25C5 .92 4.17.5 3 .5c.5.83.58 1.58.25 2.25a7.1 7.1 0 0 0-2 5.25c0 3 1 3 1 5.75L3.5 12.5zm6-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 8l1 2.5L9 8m1.5-1.5"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgProlog;
