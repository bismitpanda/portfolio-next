import * as React from "react";
import type { SVGProps } from "react";

const SvgJavascriptMap = (props: SVGProps<SVGSVGElement>) => (
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
      <path stroke="#f9e2af" d="M10 4.5h3.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V13" />
      <path
        stroke="#f9e2af"
        d="M13.5 9c-.33-.33-.83-.5-1.5-.5-1 0-1.5.5-1.5 1s.5 1 1.5 1 1.5.5 1.5 1-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5m-2-3.5v3a1 1 0 1 1-2 0"
      />
    </g>
  </svg>
);
export default SvgJavascriptMap;
