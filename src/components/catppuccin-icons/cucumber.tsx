import type { SVGProps } from "react";
import * as React from "react";

const SvgCucumber = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14 7.28a7.37 7.37 0 0 1-7.49 7.22v-1.63h0a5.76 5.76 0 0 1-4.32-7.04A5.8 5.8 0 0 1 4.94 2.3c1.37-.78 3-1 4.54-.62A5.86 5.86 0 0 1 14 7.3h0ZM6.89 5.16 6.5 4.4m2.64 5.26.37.75M5.76 8.53l-.75.38m2.25.75-.37.75m1.87-5.25.38-.75m1.87 4.12-.75-.37m-4.5-1.5-.75-.38"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCucumber;
