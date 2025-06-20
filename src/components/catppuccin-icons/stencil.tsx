import * as React from "react";
import type { SVGProps } from "react";

const SvgStencil = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#b4befe"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 6.5H4l-2.5 3H12zm-8 5h5l-2.5 3H4zM8 1.5h5l-2.5 3h-5z"
    />
  </svg>
);
export default SvgStencil;
