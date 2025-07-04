import type { SVGProps } from "react";
import * as React from "react";

const SvgOcaml = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#fab387" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 8V3c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H9" />
      <path d="m1.5 8 1.14-2.3q.09-.21.36-.24a.8.8 0 0 1 .44.13c.18.12.23.53.28.64.06.1.64 1.23.85 1.23.2 0 .71-1.47.71-1.47s.37-.49.72-.49.55.32.67.49c.12.16.24 1.76.46 2.01s1.32.87 1.67.73c.34-.13.53-.4.63-.73.1-.34-.14-.75 0-1a1.1 1.1 0 0 1 1.02-.55c.56.03 2.05.56 2.05 1.05q0 .75-1.5.75c-.48 1.33.28 2.22-3 2.25l1 4" />
      <path d="m4.5 14.5 1.5-4 1 4zm-2 0 1.5-4-1.5-.5-1 1.54V14l1 .49Z" />
    </g>
  </svg>
);
export default SvgOcaml;
