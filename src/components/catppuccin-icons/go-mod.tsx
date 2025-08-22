import type { SVGProps } from "react";
import * as React from "react";

const SvgGoMod = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.5 8.51-2 .01m1.5 2h1.5m-2-4h1m6.73-2.19a1.5 1.5 0 1 0-2.16.58m2.16-.58 2.78-.74.75 2.78m.57 2.16.75 2.79-7.73 2.07-2.07-7.73 2.78-.75m6.28 3.63a1.5 1.5 0 1 0-.58-2.17"
    />
  </svg>
);
export default SvgGoMod;
