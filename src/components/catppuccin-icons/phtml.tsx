import type { SVGProps } from "react";
import * as React from "react";

const SvgPhtml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={18} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#89b4fa">
      <path d="M1 2.7c0-.7.5-1.4 1.2-1.4h11.6c.7 0 1.3.7 1.2 1.4l-1.3 10.4c0 .4-.3.8-.6 1l-4.5 2.4q-.6.45-1.2 0l-4.5-2.4c-.3-.2-.5-.6-.6-1z" />
      <path
        d="m4 9 .2-1.4m0 0S4.4 6 4.7 6h.6c.3 0 .7.3.7.8 0 .6-.4.8-.7.8zM7.3 9l.4-1.5M8 6l-.3 1.5m0 0s.5-.5.8-.5c.4 0 .8 0 .8.3L9 9m1.6 0 .2-1.4m0 0S11 6 11.3 6h.6c.3 0 .7.3.7.8 0 .6-.4.8-.7.8z"
        strokeLinecap="round"
      />
    </g>
  </svg>
);
export default SvgPhtml;
