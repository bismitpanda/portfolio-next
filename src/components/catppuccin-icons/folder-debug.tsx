import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderDebug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#f38ba8"
        d="M12.5 10.5v-1a1 1 0 1 0-2 0v1m2.667 0c.248.372.308 1.054.333 1.5v1.5c0 1.15-.85 2-2 2s-2-.85-2-2V12c.025-.446.085-1.128.333-1.5zm-5.667 2h2m4 0h2m-4 3V13M8 15.5l1.5-1m5.5 1-1.5-1M8 9.5l1.5 1m5.5-1-1.5 1"
      />
    </g>
  </svg>
);
export default SvgFolderDebug;
