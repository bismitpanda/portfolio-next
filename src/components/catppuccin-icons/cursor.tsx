import type { SVGProps } from "react";
import * as React from "react";

const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.179 12.334-7.047 4.069-7.047-4.069V4.197L9.132.128l7.047 4.07Z"
      transform="matrix(.92099 0 0 .92169 -.41 .382)"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.51 4.25h12.98L8 15.5V8Z"
    />
  </svg>
);
export default SvgCursor;
