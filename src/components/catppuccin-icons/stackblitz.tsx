import type { SVGProps } from "react";
import * as React from "react";

const SvgStackblitz = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3.5 9.5 7.04-9-2.04 6h4l-7.04 9 2.04-6z"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgStackblitz;
