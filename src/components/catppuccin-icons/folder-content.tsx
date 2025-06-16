import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderContent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.038 8.5h5.924a.54.54 0 0 1 .538.538v5.385a1.077 1.077 0 0 1-1.077 1.077H9.577A1.077 1.077 0 0 1 8.5 14.423V9.038a.54.54 0 0 1 .538-.538M8.5 12h7M12 13.5"
    />
  </svg>
);
export default SvgFolderContent;
