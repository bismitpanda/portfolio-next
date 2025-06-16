import * as React from "react";
import type { SVGProps } from "react";

const SvgCabal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="#74c7ec" d="M5 1.5 9 8l6.5-1L11 .5z" />
      <path stroke="#b4befe" d="m9 10 6.5-1-4 5.5-6.5 1z" />
      <path
        stroke="#89b4fa"
        d="m2.1 5.075 1.694 1.476 1.901-.495-.43 2.483 1.073 2.267-1.96.058-1.237 1.896-.78-2.447L.52 9.217 2 7.647z"
      />
    </g>
  </svg>
);
export default SvgCabal;
