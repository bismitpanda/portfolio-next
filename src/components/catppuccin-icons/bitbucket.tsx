import type { SVGProps } from "react";
import * as React from "react";

const SvgBitbucket = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m13.5 14.5 2-13H.5l2 13zm1-9h-9l.5 5h4l.47-4.75"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBitbucket;
