import type { SVGProps } from "react";
import * as React from "react";

const SvgMidi = (props: SVGProps<SVGSVGElement>) => (
  <svg height={17} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#cdd6f4">
      <path d="M5.1 1.3a7.5 7.5 0 1 0 5.8 0c-.7-.3-1.4.3-1.4 1 0 .2-.2.4-.5.4H7a.5.5 0 0 1-.5-.5c0-.6-.7-1.2-1.4-.9Z" />
      <path d="M5.5 11.7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 9.2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.5 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    </g>
  </svg>
);
export default SvgMidi;
