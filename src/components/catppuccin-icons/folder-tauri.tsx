import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderTauri = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M11.11 9.812a2.32 2.32 0 0 1 4.383.95 2.326 2.326 0 0 1-1.608 2.329"
        stroke="#f9e2af"
      />
      <path
        d="M12.5 13a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        fill="#89dceb"
      />
      <path
        d="M13.881 14.243a2.32 2.32 0 0 1-4.377-.931 2.326 2.326 0 0 1 1.562-2.342"
        stroke="#89dceb"
      />
      <path
        d="M13.5 11a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
        fill="#f9e2af"
      />
    </g>
  </svg>
);
export default SvgFolderTauri;
