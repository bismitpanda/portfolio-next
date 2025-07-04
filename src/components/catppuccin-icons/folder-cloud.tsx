import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M7.5 12.429c0-1.142.834-2.068 1.863-2.068.157-.813.717-1.477 1.47-1.741a2.15 2.15 0 0 1 2.177.461c.596.55.865 1.388.708 2.2h.396c.766 0 1.386.72 1.386 1.61 0 .888-.62 1.608-1.386 1.608H9.363c-1.029-.002-1.863-.928-1.863-2.07"
        stroke="#89dceb"
      />
    </g>
  </svg>
);
export default SvgFolderCloud;
