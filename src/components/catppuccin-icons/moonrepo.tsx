import type { SVGProps } from "react";
import * as React from "react";

const SvgMoonrepo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.192 2.649A6.587 6.587 0 0 0 .5 8.889a6.59 6.59 0 0 0 6.585 6.584 6.59 6.59 0 0 0 6.302-8.498"
    />
    <circle
      cx={12.509}
      cy={3.519}
      r={2.991}
      fill="none"
      stroke="#b4befe"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMoonrepo;
