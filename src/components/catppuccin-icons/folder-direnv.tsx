import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderDirenv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        strokeWidth={0.99976575}
        d="M13.5 9.876c0-.729-.72-1.32-1.6-1.32h-.8c-.88 0-1.6.591-1.6 1.32s.72 1.32 1.6 1.32h.8c.88 0 1.6.592 1.6 1.32s-.72 1.32-1.6 1.32h-.8c-.88 0-1.6-.591-1.6-1.32m2-5.016v1.056m0 5.28v1.057"
      />
    </g>
  </svg>
);
export default SvgFolderDirenv;
