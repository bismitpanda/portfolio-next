import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCaddy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#a6e3a1"
        d="M12.27 13.774h.947v-2.306H10.32v.484m2.318-.484v-.865c0-1.153-1.739-1.153-1.739 0v.865"
      />
      <path
        stroke="#89dceb"
        d="M15.274 10.465a3.75 3.75 0 0 1-1.014 4.076 3.75 3.75 0 0 1-3.94.674c-.557-.285-1.074-.55-1.61-1.268a3.746 3.746 0 0 1 .74-5.16 3.75 3.75 0 0 1 5.013.37c.31.396.679.793.81 1.308m-5.587 3.88 1.043-.976m4.219-3.585-.66.537"
      />
    </g>
  </svg>
);
export default SvgFolderCaddy;
