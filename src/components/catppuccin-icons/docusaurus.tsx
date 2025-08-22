import type { SVGProps } from "react";
import * as React from "react";

const SvgDocusaurus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        stroke="#a6e3a1"
        d="M14.5 4.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v9q-1.5 0-2-1c0 3 .667 3 2 3h12a1 1 0 1 0 0-2V7ZM5.25 2.25 4.5 1.5l-1 1-1-1v1h-1l1 1-1 1 1 1-1 1 1 1-1 1 .75.75M15 9.5a.5.5 0 0 0 0-1H9.5V9a.5.5 0 0 1-.5.5h-.5v3h1a1 1 0 1 1 0 2"
      />
      <path
        stroke="#cdd6f4"
        d="m9.5 6.5 1-1 1 1 1-1 1 1 1-1m-8 0a1 1 0 1 0-2 0"
      />
      <path stroke="#f9e2af" d="M10.413 10.5h2.311m-.01 2h-.878" />
    </g>
  </svg>
);
export default SvgDocusaurus;
