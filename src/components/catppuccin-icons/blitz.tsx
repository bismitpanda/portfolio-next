import type { SVGProps } from "react";
import * as React from "react";

const SvgBlitz = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.43 7.5h-2.36c-.9 0-1.74-.41-2.28-1.12L5.47 3.5l1.5-3zm-8.96 1h2.35c.9 0 1.74.41 2.28 1.12l2.33 2.88-1.5 3z"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBlitz;
