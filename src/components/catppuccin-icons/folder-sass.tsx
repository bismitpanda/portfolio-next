import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderSass = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M11.82 11.127c1.006.575 1.824.401 2.635-.109s1.471-1.495.707-2.231c-.383-.368-1.774-.43-3.063.1-1.29.531-2.504 1.627-2.588 2.215-.169 1.177 1.72 1.551 1.986 2.278s.152 1.063-.113 1.52c-.264.458-1.067.876-1.521.367s.908-1.48 1.62-1.75c.711-.27 1.698-.212 2.014.135.317.347-.035.964-.014.964"
        stroke="#f5c2e7"
      />
    </g>
  </svg>
);
export default SvgFolderSass;
