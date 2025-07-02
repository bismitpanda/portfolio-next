import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderAssets = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.923 11.904H7.5L10.212 7Z" fill="none" stroke="#f9e2af" strokeLinejoin="round" />
    <path
      d="M11.662 9.641a2.569 2.596 0 1 1-1.308 2.263"
      fill="none"
      stroke="#f9e2af"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFolderAssets;
