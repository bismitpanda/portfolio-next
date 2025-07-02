import type { SVGProps } from "react";
import * as React from "react";

const SvgCabal = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 1.5 9 8l6.5-1L11 .5z" stroke="#74c7ec" />
      <path d="m9 10 6.5-1-4 5.5-6.5 1z" stroke="#b4befe" />
      <path
        d="m2.1 5.075 1.694 1.476 1.901-.495-.43 2.483 1.073 2.267-1.96.058-1.237 1.896-.78-2.447L.52 9.217 2 7.647z"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgCabal;
