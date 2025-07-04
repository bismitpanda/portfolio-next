import type { SVGProps } from "react";
import * as React from "react";

const SvgVsCodium = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#89b4fa" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.63 7.61c-.08 2.45.7 3.91 2.37 4.39a5.53 5.53 0 0 1 3.5 2.5" />
      <path d="M3.5 3.5c1.19.76 1.78 1.53 1.78 2.32S4.2 8.52 4.56 10c.45 1.82 2.94 2 2.94 4.5" />
      <path d="M7.5 7.5c-.47.08-.96.24-1.47.5-.76.39-1.47 1.54-1.47 2" />
      <path d="M7.5 1.5c1.4 2.02 2.1 3.86 2.1 5.53 0 1.17-.29 2.3-.88 3.27-.57.93-1.22 1.16-1.22 4.2m5-12c-1 0-1.51.5-2.01 1-.34.33-.67 1-.99 2m4 1c.23 1.46-.1 2.63-1 3.5-.9.88-1.63.45-3 1.5-.48.37-1.15 1.37-2 3m4.5-4h2.5" />
    </g>
  </svg>
);
export default SvgVsCodium;
