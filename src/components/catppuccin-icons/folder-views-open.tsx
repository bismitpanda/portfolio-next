import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderViewsOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#fab387"
        d="M14.692 8.5H9.308a.31.31 0 0 0-.307.336l.47 5.241c.01.128.1.235.223.27l2.303 1.153 2.308-1.153a.31.31 0 0 0 .225-.27L15 8.836a.31.31 0 0 0-.307-.336"
      />
    </g>
  </svg>
);
export default SvgFolderViewsOpen;
