import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderSharedOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <path
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.805 7.442 3.695 3.72-3.695 3.512V12.4c-2.873 0-4.105 3.1-4.105 3.1 0-3.513 1.027-5.786 4.105-5.786z"
    />
  </svg>
);
export default SvgFolderSharedOpen;
