import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderApi = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M11.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3-4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m4-4.5L14 9.5M12.5 13l1.5 1.5m-5 0 1.5-1.5M9 9.5l1.5 1.5"
        stroke="#f9e2af"
      />
    </g>
  </svg>
);
export default SvgFolderApi;
