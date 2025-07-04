import type { SVGProps } from "react";
import * as React from "react";

const SvgPerl = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.5 14.5v-3.34c-1-.66-1-1.35-1-2.66m-3 1 .02 2.53.98 2.47m-4-5v5m9 0V9.23s.17-1.73-1-1.73c0-1.5-.5-6-2.5-6S8.75 4.25 8.75 4.25A3.67 3.67 0 0 0 6.5 7.12v-3.5c0-.63-.85-1.32-1.5-1.32-.92 0-1.33.59-1.5 1.2H2.25c-.42.11-.75.59-.75 1 0 .5.28 1 .75 1h1.22l.02 3c.01.75.51 1 1.51 1h4.5"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPerl;
