import * as React from "react";
import type { SVGProps } from "react";

const SvgContributing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M8.128 14.499h-4.81c-.386 0-.818-.432-.818-.818V2.317c0-.385.432-.817.817-.817h9.37c.385 0 .817.432.817.817v6.866m-8-3.683H10.5m-5 4h3"
      />
      <path stroke="#a6e3a1" d="m9.5 12.5 2 2 4-4" />
    </g>
  </svg>
);
export default SvgContributing;
