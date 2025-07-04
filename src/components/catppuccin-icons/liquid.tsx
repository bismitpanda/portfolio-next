import type { SVGProps } from "react";
import * as React from "react";

const SvgLiquid = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.5 4.49c-.594 0-1.183-.084-1.7-.365a4.6 4.6 0 0 0-4.434 0c-.93.52-2.08.522-3.013.005a4.2 4.2 0 0 0-2.21-.576 4.2 4.2 0 0 0-2.24.578A2.8 2.8 0 0 1 .5 4.514m15 3.942c-.594 0-1.183-.085-1.7-.366a4.6 4.6 0 0 0-4.434 0c-.93.52-2.08.522-3.013.005a4.2 4.2 0 0 0-2.21-.576 4.2 4.2 0 0 0-2.24.578A2.8 2.8 0 0 1 .5 8.479m15 3.984c-.594 0-1.183-.084-1.7-.366a4.6 4.6 0 0 0-4.434 0c-.93.52-2.08.522-3.013.005a4.2 4.2 0 0 0-2.21-.575 4.2 4.2 0 0 0-2.24.577 2.8 2.8 0 0 1-1.403.382"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLiquid;
