import type { SVGProps } from "react";
import * as React from "react";

const SvgOpentofu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.982 11.759 8 15.517l-6.982-3.758V4.24L8 .483l6.982 3.758Z"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.018 4.241 8 8.062l6.982-3.821M8 8.078v7.235m-2.975-4.63.498.26m-2.56-1.349.497.26"
    />
  </svg>
);
export default SvgOpentofu;
