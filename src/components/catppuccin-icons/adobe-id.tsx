import type { SVGProps } from "react";
import * as React from "react";

const SvgAdobeId = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f38ba8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4.389v7.222a2.89 2.89 0 0 1-2.889 2.889H4.39A2.89 2.89 0 0 1 1.5 11.611V4.39A2.89 2.89 0 0 1 4.389 1.5h7.222A2.89 2.89 0 0 1 14.5 4.389M5.5 5v6" />
      <path d="M10.5 8v2.571a.44.44 0 0 1-.45.429H9c-.828 0-1.5-.64-1.5-1.429v0C7.5 8.782 8.172 8 9 8Zm0 0V6" />
    </g>
  </svg>
);
export default SvgAdobeId;
