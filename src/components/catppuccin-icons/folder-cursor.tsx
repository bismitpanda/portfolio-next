import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.8 0 1.5.7 1.5 1.5v.5m-7.5 7H2c-.8 0-1.5-.7-1.5-1.5V3.5c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v1m8 9.031L11.984 15.5 8.47 13.531V9.593l3.515-1.969 3.516 1.97Z"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.47 9.593h7.03L11.984 15.5v-3.938z"
    />
  </svg>
);
export default SvgFolderCursor;
