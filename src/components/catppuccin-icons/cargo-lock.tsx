import type { SVGProps } from "react";
import * as React from "react";

const SvgCargoLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M14.998 11.5a.5.5 0 0 1 .5.5v2.999a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zM11 11.5V10a1.5 1.5 0 0 1 3 0v1.5"
        stroke="#7f849c"
      />
      <path
        d="m.5 6 6 2.996 6-3.498m-9-2.001 3 2.003L12.498 2M3.5 4v7m3-5.502V12.5"
        stroke="#fab387"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.499 2.5 9.5 4v3" stroke="#fab387" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.498 5.5V2L9.538.5 3.5 3.5v.997l-3 1.501v3.54l6 2.962"
        stroke="#fab387"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCargoLock;
