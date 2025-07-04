import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderPublic = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M8.5 12h7M12 15.5c-1.933 0-3.5-1.5-3.5-3.5s1.567-3.5 3.5-3.5c2 0 3.5 1.5 3.5 3.5S14 15.5 12 15.5M11.556 9c-1.379 2.01-1.448 4.01.087 6.34M12.454 9c1.361 1.98 1.45 3.98-.062 6.34"
        stroke="#74c7ec"
      />
    </g>
  </svg>
);
export default SvgFolderPublic;
