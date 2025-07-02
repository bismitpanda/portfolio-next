import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderRedux = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M13.436 10.47c-.138-1.125-.735-1.97-1.452-1.97-.818 0-1.481 1.104-1.481 2.466 0 .806.232 1.522.592 1.972m1.695 1.905c.894.698 1.915.873 2.421.368.579-.578.266-1.827-.698-2.79-.571-.57-1.243-.912-1.815-.977m-3.11 1.092c-.887.76-1.384 2.137-.877 2.643.578.578 1.83.265 2.794-.698.57-.57.913-1.24.978-1.812"
        stroke="#cba6f7"
      />
    </g>
  </svg>
);
export default SvgFolderRedux;
