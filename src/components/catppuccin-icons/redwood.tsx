import type { SVGProps } from "react";
import * as React from "react";

const SvgRedwood = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.74 3.19v-.65L8 1l3.26 1.54v.65m-6.52 0L8 5.56M4.74 3.19 2.19 5.56m5.81 0L4.74 7.77M8 5.56l3.26-2.37M8 5.56l3.26 2.21m-6.52 0 3.26 3m-3.26-3L2.19 5.56m2.55 2.21L1.99 9.45M8 10.76 4.74 12.5M8 10.76l3.26-2.99m-3.26 3 3.26 1.72m-6.52 0L8 15l3.26-2.51m-6.52 0H3.5L2 9.45m.2-3.9-.7 2.92.5 1m9.26-6.27 2.55 2.37m-2.55 2.21 2.55-2.21m-2.55 2.21 2.75 1.68m-2.75 3.04h1.23L14 9.45m-.2-3.9.69 2.91-.5 1"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgRedwood;
