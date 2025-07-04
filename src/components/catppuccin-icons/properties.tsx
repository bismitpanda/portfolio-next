import type { SVGProps } from "react";
import * as React from "react";

const SvgProperties = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 1.5c-.87 0-1.17 1.32-2.03 1.63-.86.3-2.17-.68-2.84 0-.68.67.3 1.98 0 2.84S1.5 7.13 1.5 8s1.32 1.17 1.63 2.03c.3.86-.68 2.17 0 2.85.67.67 1.98-.3 2.84 0 .85.3 1.16 1.62 2.03 1.62s1.17-1.32 2.03-1.63c.86-.3 2.17.68 2.85 0 .67-.67-.3-1.98 0-2.84.3-.85 1.62-1.16 1.62-2.03s-1.32-1.17-1.63-2.03c-.3-.86.68-2.17 0-2.84-.67-.68-1.98.3-2.84 0S8.87 1.5 8 1.5m0 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgProperties;
