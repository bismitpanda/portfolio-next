import type { SVGProps } from "react";
import * as React from "react";

const SvgPhp = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M.5 12.5v.74c0 .76.774 1.26 1.5 1.26.938 0 1.5-.5 1.5-1.255V6c0-1.715 1.494-3.478 3.65-3.501 2.344 0 3.85 1.558 3.85 3 .166 2.99-1.422 4.137-3.504 5v4h8.002V9c.041-.635-.56-1.844-1.367-2.5-.937-.692-2.073-.997-3.131-1m.5 9v-3M6 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPhp;
