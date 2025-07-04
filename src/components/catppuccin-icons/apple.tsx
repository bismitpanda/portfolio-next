import type { SVGProps } from "react";
import * as React from "react";

const SvgApple = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.456 11.367c-1.428 2.76-2.57 4.133-3.612 4.133q-.729-.001-1.427-.446a2.18 2.18 0 0 0-2.246-.047c-.562.325-1.1.493-1.608.493C4.03 15.5 1.5 10.95 1.5 8.45c0-2.664 1.45-4.898 3.656-4.898 1.038 0 1.934.648 2.687.945.32.128.68.119.991-.025.61-.283 1.416-.92 2.416-.92 1.222 0 2.284.786 3.168 1.923a.383.383 0 0 1-.08.548c-.988.714-1.463 1.516-1.463 2.428 0 .913.475 1.714 1.463 2.428.157.114.207.32.118.488M8.5 3S8.347 1.394 10 1"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgApple;
