import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderTurbo = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <path
        d="M4.5 4.5H12c.8 0 1.5.7 1.5 1.5v.5m-7.5 7H2c-.8 0-1.5-.7-1.5-1.5V3.5c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v1"
        stroke="#cdd6f4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={11.5} cy={11.5} r={2} stroke="#cdd6f4" />
      <path
        d="M12.5 7.6a4 4 0 0 1 3 3.7"
        stroke="#89b4fa"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 11.5a4 4 0 0 1-.7 2.3"
        stroke="#cba6f7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 15.4a4 4 0 0 1-1.4-.7m-1.3-1.6a4 4 0 0 1-.3-1.6m7.2 2.5a4 4 0 0 1-2.2 1.4"
        stroke="#eba0ac"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgFolderTurbo;
