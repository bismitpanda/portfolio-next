import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderProtoOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.673}
    >
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
  </svg>
);
export default SvgFolderProtoOpen;
