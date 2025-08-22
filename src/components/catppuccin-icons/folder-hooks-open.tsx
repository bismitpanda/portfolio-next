import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderHooksOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#cba6f7"
        d="M12.5 9.5c0 1.333 2 1.333 2 0s-2-1.333-2 0m1 1v2.668c-.003 3.109-4.003 3.109-4 0V11.5L11 13"
      />
    </g>
  </svg>
);
export default SvgFolderHooksOpen;
