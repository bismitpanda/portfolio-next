import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderComposables = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#cba6f7"
        d="m12.635 15.154-.515-.892m.513-.895-.515.892m1.998-1.998.276.554a1 1 0 0 1-.894 1.447H12.12m-1.502-5.004.104-.207a1 1 0 0 1 1.788 0l.608 1.215m-1.119-.071 1.122.067m.615-.932-.619.938m-2.996 3.994h-.387a1 1 0 0 1-.894-1.447l.776-1.553m.616.934-.616-.934m-1.117.067 1.117-.067"
      />
    </g>
  </svg>
);
export default SvgFolderComposables;
