import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderDocker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <g stroke="#89b4fa">
        <path d="M8.5 11.5h5l.25-.5c-.151-.555-.465-.945-.25-1.5.47.297.65.937 1 1 .357-.044 1-1 1 0 0 0 0 1.5-1 1.5-.5 2-1.75 2.5-3.5 2.5-2.75 0-2.5-3-2.5-3" />
        <path d="M9.5 11.5v-2h2v2" />
      </g>
    </g>
  </svg>
);
export default SvgFolderDocker;
