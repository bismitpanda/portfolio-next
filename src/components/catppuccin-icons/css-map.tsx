import * as React from "react";
import type { SVGProps } from "react";

const SvgCssMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#f38ba8"
        d="M.5 4.06c0 .77.24 1.52.7 2.13l2.24 3.96.04.08h0c.13.17.32.27.52.27s.36-.09.48-.23h0l.03-.03.08-.15 2.2-3.88c.46-.61.71-1.37.71-2.15A3.63 3.63 0 0 0 3.88.5C1.95.5.5 2.1.5 4.06"
      />
      <path
        stroke="#f38ba8"
        d="M5.5 4A1.5 1.5 0 0 1 4 5.5 1.5 1.5 0 0 1 2.5 4 1.5 1.5 0 0 1 4 2.5 1.5 1.5 0 0 1 5.5 4"
      />
      <path stroke="#89b4fa" d="M10 3.5h5.5l-1.27 9.8L10 15l-4.23-1.7L5.6 12" />
      <path stroke="#cdd6f4" d="M9.46 5.5h3.08L12 11l-2 1-2-1-.05-.5m.55-2h3.62" />
    </g>
  </svg>
);
export default SvgCssMap;
