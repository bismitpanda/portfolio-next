import * as React from "react";
import type { SVGProps } from "react";

const SvgScala = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.5 2.48 11-.98v3.04l-11 1zm0 5 11-.98v3.04l-11 1zm0 5 11-.98v3.04l-11 1z"
    />
  </svg>
);
export default SvgScala;
