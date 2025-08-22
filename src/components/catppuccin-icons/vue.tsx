import type { SVGProps } from "react";
import * as React from "react";

const SvgVue = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 1.5h5.44L8 4.56 9.56 1.5H15l-6.99 13z" />
      <path d="M12.05 1.73 8 9.28 3.95 1.73" />
    </g>
  </svg>
);
export default SvgVue;
