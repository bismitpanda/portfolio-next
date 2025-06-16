import * as React from "react";
import type { SVGProps } from "react";

const SvgPlop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 10.62c.2 2.6 1.94 4.88 4.54 4.88h.05c2.6 0 4.33-2.29 4.53-4.88l.01-.23h0c0-1.15-.61-2.74-1.8-4.62A391 391 0 0 0 8.31 1.9l-.17-.27-.05-.07-.03-.05-.04.05-.05.07-.17.27-2.5 3.88C4.1 7.66 3.5 9.25 3.5 10.4v.23h0Z"
    />
  </svg>
);
export default SvgPlop;
