import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderNuxt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        d="M12.865 14.5H15.5L13.383 11l-1.667 2.722c-.017.03-.054.106-.105.178-.05.073-.135.19-.197.259a.8.8 0 0 1-.173.159 1 1 0 0 1-.225.102 1.5 1.5 0 0 1-.246.054c-.082.012-.205.016-.246.02-.021 0-1.09.006-1.696.006-.468.014-.363-.257-.206-.5L11 10l1.407 2.347"
      />
    </g>
  </svg>
);
export default SvgFolderNuxt;
