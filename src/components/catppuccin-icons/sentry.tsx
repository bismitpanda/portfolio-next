import type { SVGProps } from "react";
import * as React from "react";

const SvgSentry = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 12.12c0 .26.07.52.22.74.25.37.68.62 1.15.64H5.1c0-1.54-1.08-2.9-2.64-3.3l1.47-2.43A6.2 6.2 0 0 1 8 13.5h5.06c.48 0 .93-.24 1.2-.62.26-.38.31-.85.13-1.28L9.26 3.2c-.25-.43-.74-.7-1.26-.7-.53 0-1.01.27-1.27.7L5.4 5.39a8.91 8.91 0 0 1 5.5 8.12"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSentry;
