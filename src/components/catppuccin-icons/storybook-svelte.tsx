import * as React from "react";
import type { SVGProps } from "react";

const SvgStorybookSvelte = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M6.5 10.1c.45 1.05 1.23 1.4 2.46 1.4h-.21c1.35 0 2.25-.68 2.25-1.7 0-.84-.62-1.26-1.61-1.64L7.91 7.6c-.86-.33-1.41-1-1.41-1.73 0-.68.78-1.26 1.67-1.33l.36-.03c1.14-.1 2.24.53 2.47 1.39"
      />
      <path stroke="#fab387" d="M3.5 2.5 4 14l9.5.5v-13zm8-.75v1.5" />
    </g>
  </svg>
);
export default SvgStorybookSvelte;
