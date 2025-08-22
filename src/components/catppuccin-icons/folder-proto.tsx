import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderProto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <g strokeWidth={1.673}>
        <path
          stroke="#f38ba8"
          d="M6.22 2.381 2.017 8.446"
          transform="matrix(.5672 0 0 .62953 6.734 6.975)"
        />
        <path
          stroke="#89b4fa"
          d="M2.016 8.446 6.22 13.5"
          transform="matrix(.5672 0 0 .62953 6.734 6.975)"
        />
        <path
          stroke="#f9e2af"
          d="M11.295 13.5 15.5 7.435"
          transform="matrix(.5672 0 0 .62953 6.734 6.975)"
        />
        <path
          stroke="#a6e3a1"
          d="M15.5 7.435 11.295 2.38"
          transform="matrix(.5672 0 0 .62953 6.734 6.975)"
        />
      </g>
    </g>
  </svg>
);
export default SvgFolderProto;
