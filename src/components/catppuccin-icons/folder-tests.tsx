import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderTests = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="m13.158 9.16-4.272 4.254c-.558.555-.45 1.31-.064 1.694.406.403 1.077.64 1.743-.023l4.269-4.25M12.5 8.501l.5.5 1 1 1 1 .5.5m-3.478 2.005H8.96"
        stroke="#94e2d5"
      />
    </g>
  </svg>
);
export default SvgFolderTests;
