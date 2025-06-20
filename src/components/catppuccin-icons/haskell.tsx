import * as React from "react";
import type { SVGProps } from "react";

const SvgHaskell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.5 4.5h3m-1.5 3h1.5m-10 6 2.5-5-2.5-5H8l5.6 10h-2.53l-1.52-2.92L8 13.5zm-5 0 2.5-5-2.5-5H3l2.5 5-2.5 5z"
    />
  </svg>
);
export default SvgHaskell;
