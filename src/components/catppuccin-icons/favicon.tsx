import * as React from "react";
import type { SVGProps } from "react";

const SvgFavicon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.67 14.57.83-4.82L1 6.34l4.84-.71L8 1.25l2.16 4.38 4.84.71-3.5 3.41.83 4.81L8 12.29z"
    />
  </svg>
);
export default SvgFavicon;
