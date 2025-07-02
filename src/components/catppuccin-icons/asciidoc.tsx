import type { SVGProps } from "react";
import * as React from "react";

const SvgAsciidoc = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3 15 1.714-4M5.78 8.5 9 1l6 14M1 8.5h7M1 11h6"
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAsciidoc;
