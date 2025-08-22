import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderBenchmarkOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#fab387"
        d="M15 14.5c.339-.587.5-1.273.5-2a4 4 0 1 0-7.465 2m2.965 0 2-2.5"
      />
    </g>
  </svg>
);
export default SvgFolderBenchmarkOpen;
