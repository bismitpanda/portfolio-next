import type { SVGProps } from "react";
import * as React from "react";

const SvgBazel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 15.5 15.5 8V4L12 .5l-4 4-4-4L.5 4v4zM.5 4 8 11.5 15.5 4M8 15.5v-4m3.5.5V8L8 4.5 4.5 8v4"
    />
  </svg>
);
export default SvgBazel;
