import type { SVGProps } from "react";
import * as React from "react";

const SvgRsml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#89dceb"
        d="m6.785 9.2-.599-.165.383-1.429-3.695-.99L1.5 11.735l2.152.58Z"
      />
      <path
        stroke="#a6e3a1"
        d="m3.652 12.315 3.133-3.116 1.653.455 1.137 4.259Z"
      />
      <path
        stroke="#f9e2af"
        d="M9.575 13.913 8.438 9.654l.61.168.383-1.428 3.695.99-1.374 5.116Z"
      />
      <path
        stroke="#f38ba8"
        d="m9.43 8.394.384-1.429L9.21 6.8l3.084-3.128 2.206.595-1.374 5.117z"
      />
      <path
        stroke="#f5c2e7"
        d="m9.21 6.8 3.084-3.13-5.875-1.585 1.136 4.259Z"
      />
      <path
        stroke="#89b4fa"
        d="m6.57 7.606.382-1.428.603.166L6.42 2.085 4.249 1.5 2.874 6.617Z"
      />
    </g>
  </svg>
);
export default SvgRsml;
