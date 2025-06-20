import * as React from "react";
import type { SVGProps } from "react";

const SvgBitbucket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m13.5 14.5 2-13H.5l2 13zm1-9h-9l.5 5h4l.47-4.75"
    />
  </svg>
);
export default SvgBitbucket;
