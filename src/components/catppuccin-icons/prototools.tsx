import type { SVGProps } from "react";
import * as React from "react";

const SvgPrototools = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.448 11.026-1.031-3.29a4.88 4.88 0 0 1 0-2.925l1.051-3.35a.74.74 0 0 0-.927-.929L11.2 1.586a4.84 4.84 0 0 1-2.918 0L5 .552a.741.741 0 0 0-.92.955l.6 1.698a4.89 4.89 0 0 1-.276 3.886L.582 14.417c-.34.651.37 1.347 1.013.993l6.955-3.838a4.86 4.86 0 0 1 3.969-.325l1.98.702a.741.741 0 0 0 .949-.924z"
    />
  </svg>
);
export default SvgPrototools;
