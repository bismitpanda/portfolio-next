import type { SVGProps } from "react";
import * as React from "react";

const SvgStorybook = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M6.5 10.1c.45 1.05 1.23 1.4 2.46 1.4h-.21c1.35 0 2.25-.68 2.25-1.7 0-.84-.62-1.26-1.61-1.64L7.91 7.6c-.86-.33-1.41-1-1.41-1.73 0-.68.78-1.26 1.67-1.33l.36-.03c1.14-.1 2.24.53 2.47 1.39"
        stroke="#cdd6f4"
      />
      <path d="M3.5 2.5 4 14l9.5.5v-13zm8-.75v1.5" stroke="#f5c2e7" />
    </g>
  </svg>
);
export default SvgStorybook;
