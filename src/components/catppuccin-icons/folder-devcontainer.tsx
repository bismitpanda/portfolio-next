import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderDevcontainer = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path d="M8.5 9.5V14l3.5 1.5 3.5-1.5V9.5L12 8Z" stroke="#89dceb" />
      <path d="m10.5 10.5 1.5.5 1.5-.5M12 11v2.5" stroke="#89dceb" />
    </g>
  </svg>
);
export default SvgFolderDevcontainer;
