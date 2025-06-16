import * as React from "react";
import type { SVGProps } from "react";

const SvgTypst = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#94e2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.343 11.167q0 .904.252 1.214t.915.31q.687 0 1.763-.715l.457.786Q9.716 14.5 8.412 14.5q-1.305 0-2.06-.643-.754-.666-.754-2.333V5.286H4.453l-.183-.881 1.328-.429V2.81L8.343 1.5v2.619l2.7-.214-.251 1.548-2.449-.096z"
    />
  </svg>
);
export default SvgTypst;
