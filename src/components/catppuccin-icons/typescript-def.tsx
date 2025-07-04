import type { SVGProps } from "react";
import * as React from "react";

const SvgTypescriptDef = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.5 4.5h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V10" stroke="#89b4fa" />
      <path
        d="M13.5 9c-.33-.33-.83-.5-1.5-.5-1 0-1.5.5-1.5 1s.5 1 1.5 1 1.5.5 1.5 1-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5M8 8.5v4m-1.5-4h3"
        stroke="#89b4fa"
      />
      <path
        d="M2.04 7.88.5 3.02c-.05-.15.06-.31.23-.37L7.54.52c.1-.04.21-.02.3.04l2.63 1.84c.1.07.13.19.1.3L9.44 5.72a.34.34 0 0 1-.22.2l-6.8 2.13a.31.31 0 0 1-.4-.17Zm5.13-3.23a1.21 1.21 0 1 0 .62-2.35 1.21 1.21 0 0 0-.62 2.35"
        stroke="#74c7ec"
      />
    </g>
  </svg>
);
export default SvgTypescriptDef;
