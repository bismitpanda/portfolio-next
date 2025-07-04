import type { SVGProps } from "react";
import * as React from "react";

const SvgMarkdownMdx = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9.25 8.25 2.25 2.25 2.25-2.25M3.5 11V5.5l2.04 3 1.96-3V11m4-.5V5M1.65 2.5h12.7c.59 0 1.15.49 1.15 1v9c0 .51-.56 1-1.15 1H1.65c-.59 0-1.15-.49-1.15-1V3.58c0-.5.56-1.08 1.15-1.08"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMarkdownMdx;
