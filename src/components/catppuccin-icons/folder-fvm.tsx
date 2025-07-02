import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderFvm = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2c-.83 0-1.5-.67-1.5-1.5V3.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="m9.871 12.94-2.818-2.737 1.974.003 2.339 2.255c.27.269.27.7 0 .959l-2.3 2.257H7.053zm5.808 2.737v-1.326h-3.738l.013 1.323z"
        stroke="#cba6f7"
        strokeWidth={0.65}
      />
    </g>
  </svg>
);
export default SvgFolderFvm;
