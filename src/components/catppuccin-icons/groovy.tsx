import type { SVGProps } from "react";
import * as React from "react";

const SvgGroovy = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#74c7ec" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.68 5.38c.4.19.54.68 1.53 3.25 1 2.57-.92 4.07-.92 4.07s-6.73 2.47-6.73 1.63c-.18-.92-1.92-2.08-1.92-2.08s-.52-.63.06-.75c5.89-1.27 6.96-.61 7.3-2" />
      <path d="M7.38 10.63C2.62 10.88 2.48 8.08 2.5 8 3.6 4.6 9.24.91 10.8 1.58 14.07 3.04 9.2 8.96 7 8.5c-4.02-.83 1.5-4 1.5-4" />
    </g>
  </svg>
);
export default SvgGroovy;
