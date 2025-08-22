import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderTestsOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.875 8 .686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#94e2d5"
        d="m13.158 9.16-4.272 4.253c-.558.555-.45 1.31-.064 1.694.406.404 1.077.641 1.743-.022l4.269-4.25M12.5 8.5l.5.5 1 1 1 1 .5.5m-3.478 2.006H8.96"
      />
    </g>
  </svg>
);
export default SvgFolderTestsOpen;
