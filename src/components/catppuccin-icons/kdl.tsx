import type { SVGProps } from "react";
import * as React from "react";

const SvgKdl = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m6.74 4.996-1 5.367 2.48.4s2.16.2 2.6-2.262c.44-2.464-1.58-3.184-1.58-3.184z"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.54 4.916 2.04 8.06l3.86 2.483M1.5 5.076l.58 6.008"
      fill="none"
      stroke="#f5e0dc"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m11.28 5.357.32 5.206 2.9-.26"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgKdl;
