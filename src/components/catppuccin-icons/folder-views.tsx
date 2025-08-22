import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderViews = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#fab387"
        d="M14.692 8.5H9.308a.31.31 0 0 0-.307.336l.47 5.241c.01.128.1.235.223.27l2.303 1.153 2.308-1.153a.31.31 0 0 0 .225-.27L15 8.836a.31.31 0 0 0-.307-.336"
      />
    </g>
  </svg>
);
export default SvgFolderViews;
