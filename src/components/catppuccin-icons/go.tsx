import type { SVGProps } from "react";
import * as React from "react";

const SvgGo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.48 8.06-4.85.48m4.85-.48a4.98 4.98 0 0 1-4.54 5.42 5 5 0 1 1 2.95-8.66l-1.7 1.84a2.5 2.5 0 0 0-4.18 2.06c.05.57.3 1.1.69 1.51.25.27 1 .83 1.78.82.8-.02 1.58-.25 2.07-.81 0 0 .8-.96.68-1.88M2.5 8.5l-2 .01m1.5 2h1.5m-2-3.99 2-.02"
    />
  </svg>
);
export default SvgGo;
