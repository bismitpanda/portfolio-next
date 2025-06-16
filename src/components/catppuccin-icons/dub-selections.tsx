import * as React from "react";
import type { SVGProps } from "react";

const SvgDubSelections = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" fillRule="evenodd" strokeMiterlimit={1.5}>
      <path
        stroke="#eba0ac"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.121 9.737-.754.366a1.7 1.7 0 0 1-.717.162H.495V4.09h2.946c.83 0 1.501.667 1.501 1.49v2.519a2.335 2.335 0 0 0 2.344 2.326h.002a2.335 2.335 0 0 0 2.344-2.326V4.086h2.832c.827 0 1.498.665 1.498 1.486v.055c0 .79-.646 1.43-1.442 1.43h-1.642 1.46c.448 0 .854.181 1.148.473"
      />
      <ellipse
        cx={7.259}
        cy={8.092}
        stroke="#eba0ac"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx={1.122}
        ry={1.113}
      />
      <path stroke="#eba0ac" strokeLinecap="round" strokeLinejoin="round" d="M8.35 6.142" />
      <path
        stroke="#7f849c"
        d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
      />
    </g>
  </svg>
);
export default SvgDubSelections;
