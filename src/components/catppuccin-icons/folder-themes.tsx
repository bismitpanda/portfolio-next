import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderThemes = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4}>
      <path
        d="M12 21a9 9 0 0 1 0-18c4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828S17.693 15 16.5 15H14a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21"
        stroke="#f5e0dc"
        transform="matrix(.41667 0 0 .4167 6.75 6.747)"
      />
      <path
        d="M7.5 10.5c0 1.333 2 1.333 2 0s-2-1.333-2 0"
        stroke="#f38ba8"
        transform="matrix(.41667 0 0 .4167 6.75 6.747)"
      />
      <path
        d="M11.5 7.5c0 1.333 2 1.333 2 0s-2-1.333-2 0"
        stroke="#a6e3a1"
        transform="matrix(.41667 0 0 .4167 6.75 6.747)"
      />
      <path
        d="M15.5 10.5c0 1.333 2 1.333 2 0s-2-1.333-2 0"
        stroke="#89b4fa"
        transform="matrix(.41667 0 0 .4167 6.75 6.747)"
      />
    </g>
  </svg>
);
export default SvgFolderThemes;
