import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderMessagesOpen = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="#f2cdcd"
      d="M8.064 9.426a1.049 1.004 0 0 1 1.048-1.004h5.34A1.049 1.004 0 0 1 15.5 9.426v3.652a1.049 1.004 0 0 1-1.049 1.004h-4.21a.48.48 0 0 0-.372.171l-.888 1.064c-.305.364-.917.158-.917-.308Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolderMessagesOpen;
