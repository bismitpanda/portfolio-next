import * as React from "react";
import type { SVGProps } from "react";

const SvgForgejo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#fab387"
        d="M12.58 1.877a1.345 1.377 0 0 1-1.345 1.377A1.345 1.377 0 0 1 9.89 1.877 1.345 1.377 0 0 1 11.235.5a1.345 1.377 0 0 1 1.345 1.377m-7.619 10.87V5.709c0-2.114 1.672-3.827 3.734-3.827H9.89"
      />
      <path
        stroke="#f38ba8"
        d="M6.305 14.13a1.345 1.377 0 0 1-1.345 1.377 1.345 1.377 0 0 1-1.345-1.377 1.345 1.377 0 0 1 1.345-1.377 1.345 1.377 0 0 1 1.345 1.377m6.273-7.038a1.345 1.377 0 0 1-1.345 1.377 1.345 1.377 0 0 1-1.345-1.377 1.345 1.377 0 0 1 1.345-1.377 1.345 1.377 0 0 1 1.345 1.377m-7.619 5.664v-1.837c0-2.114 1.672-3.827 3.734-3.827h1.195"
      />
    </g>
  </svg>
);
export default SvgForgejo;
