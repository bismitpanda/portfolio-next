import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderPlugins = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89b4fa"
        d="m8.518 15.5 1.015-1.016m3.969-5.968-2 1.99m3.998.01-1.998 2m-2.97-2.625 3.595 3.594-.899.898a2.542 2.542 0 1 1-3.594-3.594Z"
      />
    </g>
  </svg>
);
export default SvgFolderPlugins;
