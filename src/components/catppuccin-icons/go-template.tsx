import type { SVGProps } from "react";
import * as React from "react";

const SvgGoTemplate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.5 8.51-2 .01m1.5 2h1.5m-2-4h1"
    />
    <path
      fill="none"
      stroke="#74c7ec"
      strokeDasharray="1 1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.094 5.17 1.347 5.03a1.735 1.735 0 0 1-1.227 2.126L8.349 13.9a1.735 1.735 0 0 1-2.125-1.228l-2.02-7.544A1.74 1.74 0 0 1 5.43 3l3.36-.9m-.008.002 5.312 3.068-3.352.898a.867.868 0 0 1-1.062-.613Z"
    />
  </svg>
);
export default SvgGoTemplate;
