import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderDirenv = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M13.5 9.876c0-.729-.72-1.32-1.6-1.32h-.8c-.88 0-1.6.591-1.6 1.32s.72 1.32 1.6 1.32h.8c.88 0 1.6.592 1.6 1.32s-.72 1.32-1.6 1.32h-.8c-.88 0-1.6-.591-1.6-1.32m2-5.016v1.056m0 5.28v1.057"
        stroke="#a6e3a1"
        strokeWidth={0.999_765_75}
      />
    </g>
  </svg>
);
export default SvgFolderDirenv;
