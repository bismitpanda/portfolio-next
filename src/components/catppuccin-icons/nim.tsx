import type { SVGProps } from "react";
import * as React from "react";

const SvgNim = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1 7 .5 4.5l1.01.67c.28-.27.47-.48 1.18-.85l.56-1.82L4.5 3.84c.77-.18 1.53-.36 2.4-.33L8 1.5l1.1 2.01c.87-.03 1.63.15 2.4.33l1.25-1.34.56 1.82c.7.37.9.58 1.18.85l1.01-.67L15 7m-1.5 1C13 6.5 11 5.5 8 5.5S3 6.5 2.5 8m11.5.75L13.5 8l-1 1.5-1.5.5-3-1.5L5 10l-1.5-.5-1-1.5-.5.75L1 7l1.25 3.75C3 12.75 6 13.5 8 13.5s5-.75 5.75-2.75L15 7z"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgNim;
