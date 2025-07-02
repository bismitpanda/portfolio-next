import type { SVGProps } from "react";
import * as React from "react";

const SvgStencil = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.5 6.5H4l-2.5 3H12zm-8 5h5l-2.5 3H4zM8 1.5h5l-2.5 3h-5z"
      fill="none"
      stroke="#b4befe"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgStencil;
