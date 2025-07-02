import type { SVGProps } from "react";
import * as React from "react";

const SvgConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.997 9.694a1.726 1.695 0 1 0 0-3.39 1.726 1.695 0 0 0 0 3.39m3.021-6.78 3.021 5.085-3.021 5.085H4.976L1.955 7.999l3.021-5.085z"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.711}
    />
  </svg>
);
export default SvgConfig;
