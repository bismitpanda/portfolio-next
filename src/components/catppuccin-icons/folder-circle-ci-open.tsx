import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCircleCiOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <g stroke="#7f849c">
        <path d="M8.836 13.498a3.5 3.5 0 1 0 .002-3" />
        <circle cx={12} cy={12} r={0.5} />
      </g>
    </g>
  </svg>
);
export default SvgFolderCircleCiOpen;
