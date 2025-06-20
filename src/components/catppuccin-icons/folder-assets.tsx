import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderAssets = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <path fill="none" stroke="#f9e2af" strokeLinejoin="round" d="M12.923 11.904H7.5L10.212 7Z" />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinejoin="round"
      d="M11.662 9.641a2.569 2.596 0 1 1-1.308 2.263"
    />
  </svg>
);
export default SvgFolderAssets;
