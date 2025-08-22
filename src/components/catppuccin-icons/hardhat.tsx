import type { SVGProps } from "react";
import * as React from "react";

const SvgHardhat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5 12.741a.75.73 0 0 0 .75.73h13.5a.75.73 0 0 0 .75-.73v-1.459a.75.73 0 0 0-.75-.73H1.25a.75.73 0 0 0-.75.73Zm6-5.835V3.259a.75.73 0 0 1 .75-.73h1.5a.75.73 0 0 1 .75.73v3.647M2 10.553V8.365a4.5 4.376 0 0 1 4.5-4.377m3 0A4.5 4.376 0 0 1 14 8.365v2.188"
    />
  </svg>
);
export default SvgHardhat;
