import type { SVGProps } from "react";
import * as React from "react";

const SvgContributing = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M8.128 14.499h-4.81c-.386 0-.818-.432-.818-.818V2.317c0-.385.432-.817.817-.817h9.37c.385 0 .817.432.817.817v6.866m-8-3.683H10.5m-5 4h3"
        stroke="#cdd6f4"
      />
      <path d="m9.5 12.5 2 2 4-4" stroke="#a6e3a1" />
    </g>
  </svg>
);
export default SvgContributing;
