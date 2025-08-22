import type { SVGProps } from "react";
import * as React from "react";

const SvgCHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.056 12.952a7.05 7.05 0 0 0 9.944 0l-1.79-1.783a4.513 4.513 0 0 1-6.364 0 4.47 4.47 0 0 1 0-6.338 4.513 4.513 0 0 1 6.364 0l.895-.891.895-.892a7.05 7.05 0 0 0-9.944 0 6.98 6.98 0 0 0 0 9.904"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCHeader;
