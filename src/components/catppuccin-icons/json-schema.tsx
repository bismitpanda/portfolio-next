import type { SVGProps } from "react";
import * as React from "react";

const SvgJsonSchema = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 15c-2.4-.6-1.6-2.2-1.6-3.8S2.6 8 1 8c1.6 0 1.4-1.6 1.4-3.2S1.6 1.6 4 1m8 0c2.4.6 1.6 2.2 1.6 3.8S13.4 8 15 8c-1.6 0-1.4 1.6-1.4 3.2s.8 3.2-1.6 3.8M4 5.5C5 5.6 5.8 7 5.8 7s1-3 3.2-4m-.4 6c0 .7.5 1.5.9 2m0 0a11 11 0 0 0 1.5 1.8m-1.5-1.7c.8-.8 1.6-1.5 2.5-2.1m-2.5 2L7 14"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJsonSchema;
