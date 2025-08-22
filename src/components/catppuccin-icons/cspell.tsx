import type { SVGProps } from "react";
import * as React from "react";

const SvgCspell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 1.5h4.5c1.108 0 2 .892 2 2V8H8Z"
    />
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 10.5v2c0 1.108-.892 2-2 2H8v-4Zm-13 0v2c0 1.108.892 2 2 2h2v-4Z"
    />
  </svg>
);
export default SvgCspell;
