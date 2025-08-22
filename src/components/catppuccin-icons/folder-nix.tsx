import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderNix = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.143}
    >
      <path
        stroke="#74c7ec"
        strokeWidth={1.0000523799999999}
        d="M8 11.557h1.634m.648-.933L8.724 13.19"
      />
      <path
        stroke="#89b4fa"
        strokeWidth={1.0000523799999999}
        d="m9.634 8.757.7 1.167m1.633.233h-3.01"
      />
      <path
        stroke="#74c7ec"
        strokeWidth={1.0000523799999999}
        d="m13.367 8.757-.7 1.4m.471 1.213-1.404-2.613"
      />
      <path
        stroke="#89b4fa"
        strokeWidth={1.0000523799999999}
        d="m15 12.033-1.633-.01m-.644.934L14.3 10.39"
      />
      <path
        stroke="#74c7ec"
        strokeWidth={1.0000523799999999}
        d="m13.6 14.824-1.166-1.4m-1.386.009 3.024-.01"
      />
      <path
        stroke="#89b4fa"
        strokeWidth={1.0000523799999999}
        d="m9.634 14.824.7-1.4m-.453-1.167 1.386 2.567"
      />
    </g>
  </svg>
);
export default SvgFolderNix;
