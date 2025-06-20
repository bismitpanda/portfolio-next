import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderFunctions = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89b4fa"
        d="M7 14.75c0 .583.417.75 1 .75s.556-1.556.945-3.5c.388-1.945.472-3.5 1.055-3.5s1 .167 1 .75M7.778 11.5h2.333m5.389 2H15c-1.5 0-1.818-3-3-3h-.5m0 3h.5c1.5 0 1.818-3 3-3h.5"
      />
    </g>
  </svg>
);
export default SvgFolderFunctions;
