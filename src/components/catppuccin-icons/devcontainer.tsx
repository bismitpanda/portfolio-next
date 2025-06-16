import * as React from "react";
import type { SVGProps } from "react";

const SvgDevcontainer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"
    />
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 5.5 8 7l3.5-1.5M8 7v4"
    />
  </svg>
);
export default SvgDevcontainer;
