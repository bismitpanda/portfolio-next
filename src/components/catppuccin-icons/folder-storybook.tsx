import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderStorybook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1M10 13c0 .55.529 1 1 1s1-.529 1-1-1-1-1-1-1-.529-1-1 .529-1 1-1 .902.538 1 1"
      />
      <path stroke="#f5c2e7" d="M12 8.253v.75M8.5 8.5V15l5 .5.015-7.5Z" />
    </g>
  </svg>
);
export default SvgFolderStorybook;
