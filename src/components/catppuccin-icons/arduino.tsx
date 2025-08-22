import type { SVGProps } from "react";
import * as React from "react";

const SvgArduino = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.718 6.655a3.53 3.53 0 0 1 3.602-2.138A3.515 3.515 0 0 1 15.43 7.31a3.49 3.49 0 0 1-1.789 3.765 3.55 3.55 0 0 1-4.154-.6C8.04 8.948 7.851 6.88 6.514 5.539a3.54 3.54 0 0 0-3.839-.758A3.49 3.49 0 0 0 .5 8.008c0 1.412.858 2.686 2.175 3.226a3.54 3.54 0 0 0 3.839-.758c.947-1.122 1.52-2.527 2.204-3.821M5 8H3m9.899.008h-1.88M12 9V7"
    />
  </svg>
);
export default SvgArduino;
