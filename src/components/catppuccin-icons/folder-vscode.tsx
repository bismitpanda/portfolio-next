import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderVscode = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="m8 10 5.555 5.432s.179.143.342.015l1.434-.739c.195-.144.168-.321.168-.321V9.55c0-.212-.202-.286-.202-.286l-1.322-.687c-.288-.192-.477.035-.477.035l-.421.406L8 14"
        stroke="#89b4fa"
      />
    </g>
  </svg>
);
export default SvgFolderVscode;
