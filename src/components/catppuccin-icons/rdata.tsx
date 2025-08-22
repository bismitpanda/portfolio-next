import type { SVGProps } from "react";
import * as React from "react";

const SvgRdata = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.79}
      d="M10.5 9.5c.4 0 .86.34 1 .7l1 3.3m-5 0v-8h3.05c.95 0 1.95 1 1.95 2s-1 2-1.95 2H7.5Z"
      transform="matrix(1.26652 0 0 1.26466 -1.313 -1.572)"
    />
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.65 4.133c2.303 0 4.17-1.017 4.17-1.947S7.953.5 5.65.5s-4.169.756-4.169 1.686 1.867 1.947 4.17 1.947m.538 2.898q-.269.014-.539.014c-.72 0-1.44-.074-2.084-.223-1.29-.298-2.085-.996-2.085-1.599M6.19 9.928q-.269.015-.539.015c-.72 0-1.44-.077-2.084-.23-1.29-.29-2.085-.85-2.085-1.453m0-6.03v6.03M9.82 2.23v1.507"
    />
  </svg>
);
export default SvgRdata;
