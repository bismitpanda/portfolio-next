import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderHooks = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M12.5 9.5c0 1.333 2 1.333 2 0s-2-1.333-2 0m1 1v2.668c-.003 3.109-4.003 3.109-4 0V11.5L11 13"
        stroke="#cba6f7"
      />
    </g>
  </svg>
);
export default SvgFolderHooks;
