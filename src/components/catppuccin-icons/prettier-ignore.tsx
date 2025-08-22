import type { SVGProps } from "react";
import * as React from "react";

const SvgPrettierIgnore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 2.5h11m-11 6h5m-5-4h5m3 4h5m-5-4h5m-13 2h5m-5 6h5m3-6h5m-13 4h11m-11 4h5"
    />
  </svg>
);
export default SvgPrettierIgnore;
