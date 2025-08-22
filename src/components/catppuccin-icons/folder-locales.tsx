import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderLocales = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#cba6f7"
        d="M12 14.5h3m-3.5 1 2-4 2 4m-6-4s.556 1.734 3 2m-1-3.5s.148 3.3-3 3.5H8m0-4h5M10.5 8v1.5"
      />
    </g>
  </svg>
);
export default SvgFolderLocales;
