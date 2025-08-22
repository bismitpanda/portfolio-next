import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderNextOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#7f849c"
        d="M15.163 13.501a3.5 3.5 0 1 0-1.238 1.423m-.005-.004L10.5 10.5v3m3-3v1"
      />
    </g>
  </svg>
);
export default SvgFolderNextOpen;
