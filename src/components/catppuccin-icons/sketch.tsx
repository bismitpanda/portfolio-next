import type { SVGProps } from "react";
import * as React from "react";

const SvgSketch = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m.7 6.9 6.67 7.32c.34.37.91.37 1.24 0l6.67-7.32c.26-.29.3-.72.07-1.04l-2.94-4a.83.83 0 0 0-.69-.36H4.28a.83.83 0 0 0-.68.36l-2.95 4A.84.84 0 0 0 .72 6.9zm1.8-.4h11m-1.5 0L9 3M4 6.5 7 3m0 8.5-3-5m8 0-3 5m3-5-.5-3M4 6.5l.5-3"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSketch;
