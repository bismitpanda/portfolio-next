import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderReduxOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#cba6f7"
        d="M13.436 10.47c-.138-1.125-.736-1.97-1.452-1.97-.818 0-1.482 1.104-1.482 2.466 0 .806.233 1.522.592 1.972m1.696 1.905c.893.698 1.914.873 2.42.368.58-.578.267-1.827-.698-2.79-.57-.57-1.242-.912-1.815-.977m-3.11 1.092c-.886.76-1.383 2.137-.877 2.643.58.578 1.83.266 2.795-.698.57-.57.913-1.24.978-1.812"
      />
    </g>
  </svg>
);
export default SvgFolderReduxOpen;
