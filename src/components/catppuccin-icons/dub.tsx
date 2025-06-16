import * as React from "react";
import type { SVGProps } from "react";

const SvgDub = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" fillRule="evenodd" stroke="#eba0ac" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4.537 10.789-.841.41c-.25.12-.522.183-.799.183H.495V4.444h3.284c.924 0 1.673.75 1.673 1.673v2.831a2.613 2.613 0 0 0 2.613 2.613h0a2.613 2.613 0 0 0 2.614-2.613V4.44h3.157c.922 0 1.669.748 1.669 1.67v.062c0 .888-.72 1.607-1.607 1.607h-1.83 1.626c1 0 1.811.811 1.811 1.811v.003c0 1-.81 1.81-1.81 1.81H11.23" />
      <circle cx={8.034} cy={8.941} r={1.25} />
      <path d="M9.25 6.75" />
    </g>
  </svg>
);
export default SvgDub;
