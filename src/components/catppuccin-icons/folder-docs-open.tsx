import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderDocsOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#89b4fa"
        d="M8.5 14.5v-5a1 1 0 0 1 1-1h6v6m-6-1h6v2h-6a1 1 0 1 1 0-2"
      />
    </g>
  </svg>
);
export default SvgFolderDocsOpen;
