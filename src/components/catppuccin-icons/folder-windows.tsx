import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.8 0 1.5.7 1.5 1.5v.5m-7.5 7H2c-.8 0-1.5-.7-1.5-1.5V3.5c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v1"
    />
    <path
      fill="none"
      stroke="#89b4fa"
      d="M7.873 14.252V9.973c0-.126.102-.234.241-.254l7.056-.992c.173-.025.33.096.33.254v6.262c0 .158-.157.279-.33.254l-7.056-.992c-.139-.02-.241-.127-.241-.254Zm0-2.14H15.5m-4.529-2.788v5.577"
    />
  </svg>
);
export default SvgFolderWindows;
