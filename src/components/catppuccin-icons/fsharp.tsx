import * as React from "react";
import type { SVGProps } from "react";

const SvgFsharp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1 8 5.5-6v2.93L3.57 8l2.93 2.8v2.93zm14 0L9.5 2v2.93L12.25 8 9.5 10.79v2.93z"
    />
  </svg>
);
export default SvgFsharp;
