import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderFvmOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cba6f7"
        strokeWidth={0.65}
        d="M9.868 12.94 7.05 10.203l1.974.003 2.339 2.255c.27.269.27.7 0 .959l-2.3 2.257H7.05zm5.808 2.737v-1.326h-3.738l.013 1.323z"
      />
      <path
        stroke="#cdd6f4"
        d="m1.873 8 .702-2.74a1.002 1 0 0 1 .961-.76h10.96a1.002 1 0 0 1 .973 1.24l-.22.875M6.009 13.5H2.001A1.503 1.5 0 0 1 .498 12V3.5a1.002 1 0 0 1 1.002-1h5.01a1.002 1 0 0 1 1.002 1v1"
      />
    </g>
  </svg>
);
export default SvgFolderFvmOpen;
