import * as React from "react";
import type { SVGProps } from "react";

const SvgBiome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.538 12.543C4.37 11.165 5.328 10.297 8 11l.5-2.5c-1.897-.447-4.05-.218-5.58.991a6.38 6.38 0 0 0-2.42 5h15L8 1.51 5 6.5"
    />
  </svg>
);
export default SvgBiome;
