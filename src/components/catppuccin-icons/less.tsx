import type { SVGProps } from "react";
import * as React from "react";

const SvgLess = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 2.5c-.74 0-1.5.76-1.5 1.5v2c0 1.1-1.1 2-1.83 2 .74 0 1.83.9 1.83 2v2c0 .74.76 1.5 1.5 1.5m1.5-8v5a1 1 0 0 0 1 1H7m4.5-4c0-.69-.59-1-1.25-1h-.5c-.66 0-1.25.56-1.25 1.25S9.09 9 9.75 9h.5c.66 0 1.25.56 1.25 1.25s-.59 1.25-1.25 1.25h-.5c-.66 0-1.25-.31-1.25-1m3.5-8c.74 0 1.5.76 1.5 1.5v2c0 1.1 1.1 2 1.83 2-.74 0-1.83.9-1.83 2v2c0 .74-.76 1.5-1.5 1.5"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLess;
