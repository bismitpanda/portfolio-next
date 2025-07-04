import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderWxt = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10.278c0-.576.468-1.044 1.044-1.044h1.045v-.19a1.044 1.044 0 0 1 2.088 0v.19h1.045c.576 0 1.044.468 1.044 1.044v1.045h.19a1.044 1.044 0 1 1 0 2.088h-.19v1.045c0 .576-.468 1.044-1.044 1.044h-1.045v-.19a1.044 1.044 0 1 0-2.088 0v.19H8v-2.089h.19a1.044 1.044 0 0 0 0-2.088H8Z"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFolderWxt;
