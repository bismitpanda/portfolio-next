import type { SVGProps } from "react";
import * as React from "react";

const SvgNestService = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m11.5 15.5.5-3.47C10.5 16 8.34 15.28 7.52 15.5c-.23.06 1.67-.48 2.48-2-.9.33-1.56.5-1.98.5 1.42-1.23 1.91-2.4 1.5-3.5-.34 2.33-4.61 4.11-5.53 2.06-.6-1.37-.28-2.23.97-2.57 0 1.06.51 1.59 1.54 1.59V10.5l1.97.91C8.16 8.14 6 6.83 2 7.5 1 6.35.5 5.52.5 5c0-.78.25-1 1-1s1-.02 2.03-1.05C5.09 1.46 7.1 1.1 9.5 2.57Q9.17 1.625 10.55.5c1.48.73 2.13 1.73 1.94 3s-1.02 1.94-2.5 2c.49.37 1.15.37 2 0a2.41 2.41 0 0 0 1.48-2c1.35 1.67 2.02 3.33 2.02 5s-.35 3.02-1.04 4.06l-.5-2.06c-.98 3.5-1.56 4.3-2.47 5Z"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgNestService;
