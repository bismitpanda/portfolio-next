import * as React from "react";
import type { SVGProps } from "react";

const SvgSecurity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f2cdcd"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.75 5.738h.007m6.33 1.941H14.5l-2.275 4.53-2.008-2.796"
    />
    <path
      fill="none"
      stroke="#f2cdcd"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.9 6.061-2.6 5.177-6.753-3.365a1.898 1.89 0 0 1-.845-2.53l.897-1.805a1.898 1.89 0 0 1 2.548-.842ZM1.5 12.21h2.444a1.3 1.294 0 0 0 1.17-.712L6.05 9.62M1.5 13.503v-2.588"
    />
  </svg>
);
export default SvgSecurity;
