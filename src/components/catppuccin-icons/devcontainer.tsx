import type { SVGProps } from "react";
import * as React from "react";

const SvgDevcontainer = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 5.5 8 7l3.5-1.5M8 7v4"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgDevcontainer;
