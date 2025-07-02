import type { SVGProps } from "react";
import * as React from "react";

const SvgRacket = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M13.11 12.01A6.5 6.5 0 0 0 5.77 1.9c2.65 1.38 6.14 5.9 7.34 10.12h0Z"
        stroke="#89b4fa"
      />
      <path
        d="M7.07 5.65A11.3 11.3 0 0 0 3.72 3.1a6.48 6.48 0 0 0-.61 9.17c.88-2.65 2.54-5.2 3.96-6.63Zm1.2 1.47a15.15 15.15 0 0 0-3.32 6.62 6.47 6.47 0 0 0 6.18-.04 17.9 17.9 0 0 0-2.86-6.58"
        stroke="#f38ba8"
      />
    </g>
  </svg>
);
export default SvgRacket;
