import type { SVGProps } from "react";
import * as React from "react";

const SvgRenovate = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M11.28 11.04c-.2-.3-.33-.53-.25-.85.05-.2.17-.38.31-.52C12.62 8.41 13.76 7.32 14.8 6c.09-.12.13-.27.17-.41.03-.12.03-.25.03-.38 0-.12-.01-.24-.05-.35a6.9 6.9 0 0 0-1.4-2.18c-.14-.1-.28-.2-.44-.27a1.1 1.1 0 0 0-.36-.09c-.16 0-.33.01-.48.05-.17.05-.29.13-.46.23m.31 12.15-1.34-2.26a.7.7 0 0 1-.08-.56.73.73 0 0 1 .35-.44l.77-.43a.77.77 0 0 1 1.02.27l1.34 2.26"
        stroke="#cdd6f4"
      />
      <path
        d="m2.63 5.4 6.41-3.6c.91-.52 2.06-.2 2.59.69A1.83 1.83 0 0 1 10.95 5L4.54 8.62c-.9.51-2.06.2-2.59-.7a1.83 1.83 0 0 1 .68-2.52"
        stroke="#94e2d5"
      />
    </g>
  </svg>
);
export default SvgRenovate;
