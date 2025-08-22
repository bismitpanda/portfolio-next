import type { SVGProps } from "react";
import * as React from "react";

const SvgBlitz = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.43 7.5h-2.36c-.9 0-1.74-.41-2.28-1.12L5.47 3.5l1.5-3zm-8.96 1h2.35c.9 0 1.74.41 2.28 1.12l2.33 2.88-1.5 3z"
    />
  </svg>
);
export default SvgBlitz;
