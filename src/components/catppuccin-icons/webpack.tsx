import type { SVGProps } from "react";
import * as React from "react";

const SvgWebpack = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4.5 10.02-3 1.73M11.47 10l3.03 1.75M8 4V.5" stroke="#89dceb" />
      <path d="M11.5 10 8 12l-3.5-2V6L8 4l3.5 2z" stroke="#89b4fa" />
      <path
        d="M14.5 11.75 8 15.5l-6.5-3.75v-7.5L8 .5l6.5 3.75zm-13-7.5L8 8m6.5-3.75L8 8m0 0v7.5"
        stroke="#89dceb"
      />
    </g>
  </svg>
);
export default SvgWebpack;
