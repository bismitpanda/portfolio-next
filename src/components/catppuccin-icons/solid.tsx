import type { SVGProps } from "react";
import * as React from "react";

const SvgSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 11.575Q6.05 14.5 8 14.5c1.625 0 2.6-.975 2.6-2.275S9.625 9.95 8 9.95q-1.95 0-6.5 1.625"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.45 8.975Q8 7.35 9.95 7.35c1.625 0 2.6.975 2.6 2.275 0 .48-.133.915-.382 1.274l-1.874 2.486m4.206-8.96C11.9 2.475 9.3 1.5 8 1.5c-1.326 0-1.702.301-2.222 1.004M1.5 11.575l1.95-2.6m11.05-4.55-1.95 2.6m-6.772-4.52-1.92 2.411"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.02 8.43c-.981-.31-1.57-.961-1.57-2.055 0-1.625.975-2.275 2.6-2.275 1.097 0 3.307.694 5.329 2.083a75 75 0 0 1 1.171.842l-1.496.51"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSolid;
