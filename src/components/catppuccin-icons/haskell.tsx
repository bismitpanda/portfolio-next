import type { SVGProps } from "react";
import * as React from "react";

const SvgHaskell = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.5 4.5h3m-1.5 3h1.5m-10 6 2.5-5-2.5-5H8l5.6 10h-2.53l-1.52-2.92L8 13.5zm-5 0 2.5-5-2.5-5H3l2.5 5-2.5 5z"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgHaskell;
