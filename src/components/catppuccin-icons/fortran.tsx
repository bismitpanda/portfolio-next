import * as React from "react";
import type { SVGProps } from "react";

const SvgFortran = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14.5v-1l-1-1v-3h2l1 2h1v-6h-1l-1 2h-2v-4h5l1 3h1v-5h-11v1l1 1v9l-1 1.25v.75z"
    />
  </svg>
);
export default SvgFortran;
