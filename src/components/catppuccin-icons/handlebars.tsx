import type { SVGProps } from "react";
import * as React from "react";

const SvgHandlebars = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 6.15a1.73 1.73 0 0 0-2.48-.22c-.97.82-1.78 2.5-3.31 2.5a.99.99 0 0 1-.83-.66.97.97 0 0 1 .24-1.02C.45 6.75.1 8.67 1.03 9.56a4.76 4.76 0 0 0 4.7.56C6.63 9.76 7.4 9.2 8 8.45zm0 0a1.73 1.73 0 0 1 2.48-.22c.96.82 1.78 2.5 3.3 2.5a1 1 0 0 0 .84-.66.97.97 0 0 0-.24-1.02c1.17 0 1.52 1.92.58 2.81a4.76 4.76 0 0 1-4.7.56A5.34 5.34 0 0 1 8 8.45z"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgHandlebars;
