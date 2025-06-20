import * as React from "react";
import type { SVGProps } from "react";

const SvgJson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 2.5H4c-.75 0-1.5.75-1.5 1.5v2c0 1.1-1 2-1.83 2 .83 0 1.83.9 1.83 2v2c0 .75.75 1.5 1.5 1.5h.5m7-11h.5c.75 0 1.5.75 1.5 1.5v2c0 1.1 1 2 1.83 2-.83 0-1.83.9-1.83 2v2c0 .74-.75 1.5-1.5 1.5h-.5m-6.5-3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    />
  </svg>
);
export default SvgJson;
