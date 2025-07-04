import type { SVGProps } from "react";
import * as React from "react";

const SvgSvelteConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M9.92 5.32s1.26-1.83.07-3.58C8.79 0 6.8.6 6.8.6s-3 1.6-4.65 2.75C.88 4.28.13 5.44 1.23 7.39 2.33 9.33 5.39 8.5 5.39 8.5m-4.3-.82S-.19 9.51 1 11.26C2.21 13 4.2 12.4 4.2 12.4s1.76-.94 3.32-1.9m2.79-3a3.36 3.36 0 0 0-.53-1.89C8.67 3.67 5.61 4.5 5.61 4.5M3.96 5.54l3.76-2.36M3.25 9.87 7 7.5"
        stroke="#fab387"
      />
      <path
        d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.75-4 1.75 3-1.75 3h-3.5L8 12.5l1.75-3z"
        stroke="#7f849c"
      />
    </g>
  </svg>
);
export default SvgSvelteConfig;
