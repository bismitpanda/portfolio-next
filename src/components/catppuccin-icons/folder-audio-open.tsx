import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderAudioOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <g stroke="#eba0ac">
        <path d="M10.654 14.423A1.077 1.077 0 0 1 9.577 15.5 1.077 1.077 0 0 1 8.5 14.423a1.077 1.077 0 0 1 1.077-1.077 1.077 1.077 0 0 1 1.077 1.077m4.846-1.077a1.077 1.077 0 0 1-1.077 1.077 1.077 1.077 0 0 1-1.077-1.077 1.077 1.077 0 0 1 1.077-1.077 1.077 1.077 0 0 1 1.077 1.077" />
        <path d="M10.654 14.423v-4.038c0-.291.237-.652.727-.808L14.773 8.5c.485 0 .727.474.727.808v4.081m-4.846-1.658 4.846-1.616" />
      </g>
    </g>
  </svg>
);
export default SvgFolderAudioOpen;
