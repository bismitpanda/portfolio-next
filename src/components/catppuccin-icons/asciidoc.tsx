import type { SVGProps } from "react";
import * as React from "react";

const SvgAsciidoc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3 15 1.714-4M5.78 8.5 9 1l6 14M1 8.5h7M1 11h6"
    />
  </svg>
);
export default SvgAsciidoc;
