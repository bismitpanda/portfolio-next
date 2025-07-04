import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderPackages = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M12 15.337v-3.919L8.5 9.214m3.5 2.204 3.5-2.204M12 7.5l3.5 1.714v4.408L12 15.5l-3.5-1.878V9.214Z"
        stroke="#fab387"
      />
    </g>
  </svg>
);
export default SvgFolderPackages;
