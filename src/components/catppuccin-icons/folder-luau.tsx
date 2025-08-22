import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderLuau = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinejoin="round"
      d="M9.314 7.624 15.5 9.287 13.85 15.5l-6.226-1.69Z"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinejoin="round"
      d="m11.482 9.98-.463 1.854 1.853.464.464-1.854z"
    />
  </svg>
);
export default SvgFolderLuau;
