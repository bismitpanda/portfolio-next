import type { SVGProps } from "react";
import * as React from "react";

const SvgDarklua = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#7f849c"
        d="M12.432 4.767a1.73 1.73 0 0 1-1.73 1.731 1.73 1.73 0 0 1-1.731-1.73 1.73 1.73 0 0 1 1.73-1.731 1.73 1.73 0 0 1 1.731 1.73"
      />
      <path stroke="#cdd6f4" d="M8 .5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15" />
    </g>
  </svg>
);
export default SvgDarklua;
