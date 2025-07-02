import type { SVGProps } from "react";
import * as React from "react";

const SvgDrawio = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.25 10.5h3.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75m8 0h3.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75m-4-9h3.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75M4 10.5l3.5-5m4.5 5-3.5-5"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgDrawio;
