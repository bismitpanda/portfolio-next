import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderCargo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2c-.83 0-1.5-.67-1.5-1.5V3.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"
      />
      <path
        stroke="#fab387"
        strokeWidth={0.571}
        d="M8.286 11.429v2.285l3.714 2 3.714-2V9.143l-2-.857L10 10v.571ZM12 9.143 14 10v4.571M8.286 11.43l3.714 2 3.714-2M10 10l2 1.143 3.714-2M10 10.57v4m2-3.428v4.286"
      />
    </g>
  </svg>
);
export default SvgFolderCargo;
