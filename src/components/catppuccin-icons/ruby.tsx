import type { SVGProps } from "react";
import * as React from "react";

const SvgRuby = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 9.06v2.5c.02.86.36 1.61.9 2.15 1.76 1.76 5.71.65 8.84-2.47 3.12-3.13 4.23-7.08 2.47-8.84a3.1 3.1 0 0 0-2.15-.9h-2.5M14.5 4l-.25 10.25L4 14.5m4.39-6.11c2.34-2.35 3.29-5.2 2.12-6.37S6.49 1.8 4.14 4.14C1.8 6.5.85 9.34 2.02 10.51s4.02.22 6.37-2.12M5.5 14.5l.25-3.75L11 11l-.25-5.25 3.75-.25"
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgRuby;
