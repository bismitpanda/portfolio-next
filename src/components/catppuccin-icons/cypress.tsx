import type { SVGProps } from "react";
import * as React from "react";

const SvgCypress = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#a6e3a1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 9.393c-.476.873-1.446 1.308-2.376 1.065S3.532 9.353 3.501 8.347s.578-1.91 1.491-2.216c.913-.305 1.908.064 2.436.903m3.072 2.968L8.5 6m-.503 8.5c.367-.048.527-.073.731-.21.126-.106.245-.28.302-.433L12.5 6" />
      <path d="M7.964 14.5a6.5 6.5 0 1 1 3.838-1.228" />
    </g>
  </svg>
);
export default SvgCypress;
